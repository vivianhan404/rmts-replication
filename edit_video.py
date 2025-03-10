import cv2
from moviepy import VideoFileClip

def crop_buttons(old_name, new_name, x, y, w, h):
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

def crop_button_2(old_name, new_name, x1, y1, w, h):
    clip = (
        VideoFileClip(old_name)
        .subclipped(0, -8)
        .with_volume_scaled(0)
        .cropped(x1=x1,y1=y1,width=w,height=h)
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
left = (15,470,850,450)
# right
right = (1055,470,850,450)
crop_button_2(f'old_materials/mp4/Movie3_Inclusion1_video.mp4', f'mp4/Movie3_Inclusion1_left.mp4', *left)
crop_button_2(f'old_materials/mp4/Movie3_Inclusion1_video.mp4', f'mp4/Movie3_Inclusion1_right.mp4', *right)

crop_button_2(f'old_materials/mp4/Movie6_Inclusion2_video.mp4', f'mp4/Movie5_Inclusion2_left.mp4', *left)
crop_button_2(f'old_materials/mp4/Movie6_Inclusion2_video.mp4', f'mp4/Movie5_Inclusion2_right.mp4', *right)


