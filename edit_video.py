import cv2
from moviepy import VideoFileClip

def crop_buttons(old_name, new_name, x, y, h, w):
    cap = cv2.VideoCapture(old_name)
    fps, num_frames = cap.get(cv2.CAP_PROP_FPS), cap.get(cv2.CAP_PROP_FRAME_COUNT)

    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(new_name, fourcc, fps, (w, h))

    for _ in range(int(num_frames - 8 * fps)):
        ret, frame = cap.read()
        assert(ret)
        crop_frame = frame[y:y+h, x:x+w]
        out.write(crop_frame)

    cap.release()
    out.release()

def crop_video(old_name, new_name):
    clip = (
        VideoFileClip(old_name)
        .subclipped(0, -8)
        .cropped(x1=0,y1=0,width=1920,height=470)
    )
    clip.write_videofile(new_name)

# trials = [
#     "EasyMonotonic_1",
#     "EasySymmetric_1",
#     "HardMonotonic_1",
#     "HardSymmetric_1",
#     "EasyMonotonic_2",
#     "EasySymmetric_2",
#     "HardMonotonic_2",
#     "HardSymmetric_2",
# ]
# for idx, name in enumerate(trials):
#     old_n = int(3 * idx + 9)
#     new_n = int(2 * idx + 7)

fps = 30
# left
left = (15,470,450,850)
# right
right = (1055,470,450,850)
crop_buttons(f'mp4/Movie3_Inclusion1_video.mp4', f'cropped_mp4/Movie3_Inclusion1_left.mp4', *left)
crop_buttons(f'mp4/Movie3_Inclusion1_video.mp4', f'cropped_mp4/Movie3_Inclusion1_right.mp4', *right)

crop_buttons(f'mp4/Movie6_Inclusion2_video.mp4', f'cropped_mp4/Movie5_Inclusion2_left.mp4', *left)
crop_buttons(f'mp4/Movie6_Inclusion2_video.mp4', f'cropped_mp4/Movie5_Inclusion2_right.mp4', *right)


