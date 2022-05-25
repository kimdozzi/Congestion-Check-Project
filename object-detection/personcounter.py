from darknetyolov4 import darknet
import random
import cv2
import os

class PeopleCounter:
    def __init__(self):
        random.seed(3)  # deterministic bbox colors
        cd_path = os.path.dirname(os.path.abspath(__file__))
        self.network, self.class_names, self.class_colors = darknet.load_network(
            cd_path + '/darknetyolov4/cfg/yolov4.cfg',
            cd_path + '/darknetyolov4/cfg/coco.data',
            cd_path + '/darknetyolov4/yolov4.weights',
            batch_size=1
        )
    
    def image_detection(self, image_path, network, class_names, class_colors, thresh):
        # Darknet doesn't accept numpy images.
        # Create one with image we reuse for each detect
        width = darknet.network_width(network)
        height = darknet.network_height(network)
        darknet_image = darknet.make_image(width, height, 3)

        image = cv2.imread(image_path)
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        image_resized = cv2.resize(image_rgb, (width, height),
                                interpolation=cv2.INTER_LINEAR)

        darknet.copy_image_from_bytes(darknet_image, image_resized.tobytes())
        detections = darknet.detect_image(network, class_names, darknet_image, thresh=thresh)
        darknet.free_image(darknet_image)
        return detections

    def count_people(self, image_name):
        detections = self.image_detection(
            image_name, self.network, self.class_names, self.class_colors, 0.25
        )
        cnt = 0
        for i in detections:
            if i[0] == 'person' and float(i[1]) > 36.5 :
                cnt+=1
        return cnt