from moviepy import VideoFileClip

def crop_video(old_name, new_name):
    clip = (
        VideoFileClip(old_name)
        .subclipped(0, -3)
        .cropped(x1=0,y1=0,width=1920,height=470)
    )
    clip.write_videofile(new_name)

def crop_button_2(old_name, new_name, x1, y1, w, h):
    clip = (
        VideoFileClip(old_name)
        .subclipped(0, -3)
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

fps = 30
left = (0,470,825,425)
right = (1095,470,825,425)

# for idx, name in enumerate(trials):
#     old_n = int(3 * idx + 9)
#     new_n = int(2 * idx + 7)
#     crop_button_2(f'old_materials/mp4/Movie{old_n}_A_{name}_video.mp4', 
#                     f'mp4/Movie{new_n}_A_{name}_left.mp4', *left)
#     crop_button_2(f'old_materials/mp4/Movie{old_n}_A_{name}_video.mp4', 
#                     f'mp4/Movie{new_n}_A_{name}_right.mp4', *right)

#     crop_button_2(f'old_materials/mp4/Movie{old_n}_B_{name}_video.mp4', 
#                     f'mp4/Movie{new_n}_B_{name}_left.mp4', *left)
#     crop_button_2(f'old_materials/mp4/Movie{old_n}_B_{name}_video.mp4', 
#                     f'mp4/Movie{new_n}_B_{name}_right.mp4', *right)

crop_button_2('old_materials/mp4/Movie3_Inclusion1_video.mp4', 'mp4/Movie3_Inclusion1_left.mp4', *left)
crop_button_2('old_materials/mp4/Movie3_Inclusion1_video.mp4', 'mp4/Movie3_Inclusion1_right.mp4', *right)
crop_video('old_materials/mp4/Movie3_Inclusion1_video.mp4', 'mp4/Movie3_Inclusion1_top.mp4')


