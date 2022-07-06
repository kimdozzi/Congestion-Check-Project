import React from "react";
import axios from "axios";
import "./MainSection.css";

class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "", // 업로드할 파일
      peopleCount: "", // 서버로부터 받아온 검출된 사람의 수
      timeCount: "", // 서버로부터 받은 걸린 시간
      filechanged: false, // 업로드할 파일이 새롭게 갱신되었는가
    };

    //업로드할 파일을 선택하면 호출되는 함수
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
      filechanged: true,
    });
  }

  submit() {
    //서버에 전송할 데이터 만들기
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    console.log(this.state.selectedFile);
    let url = "/upload";

    if (this.state.filechanged) {
      // 서버로부터 응답을 받기 전까지는 ... 출력
      this.setState({
        filechanged: false,
        peopleCount: "...",
        timeCount: "...",
      });
      axios
        .post(url, data, {})
        .then((res) => {
          // 사람 수 검출에 성공했을 경우
          this.setState({ peopleCount: res.data[0], timeCount: res.data[1] });
        })
        .catch((error) => {
          // 사람 수 검출에 실패했을 경우
          console.error(error);
          this.setState({ peopleCount: "?", timeCount: "?" });
        });
    } else {
      console.warn("already sent.");
    }
  }

  render() {
    return (
      <section id="section">
        <nav>nav area</nav>
        <article>
          <input
            type="file"
            className="form-control"
            name="upload_file"
            onChange={this.handleInputChange}
          />
          <br />
          <button type="submit" className="btn" onClick={() => this.submit()}>
            Send
          </button>
          <br />
          <span>count: {this.state.peopleCount}</span>
          <br />
          <span>time: {this.state.timeCount}</span>
        </article>
      </section>
    );
  }
}

export default MainSection;
