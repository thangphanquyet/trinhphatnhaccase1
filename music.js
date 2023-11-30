let songs = [
    {
        name:'Lạ Lùng',
        path:'music/Lạ Lùng - Vũ. live at Soul Of The Forest.mp4',
        artist:'Vũ. live',
        image:'data:image/jpeg;base64,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'
    },
    {
        name:'Day dứt nỗi đau',
        path:'music/DayDutNoiDau-MrSiro-3569331.mp3',
        artist:'MrSiro',
        image:'https://i.ytimg.com/vi/Pxb86dXItBU/maxresdefault.jpg'
    },
    {
        name:'Bức tranh từ nước mắt',
        path:'music/BucTranhTuNuocMat-MrSiro-2741834.mp3',
        artist:'MrSiro',
        image:'https://i.ytimg.com/vi/45ydICylsTw/maxresdefault.jpg'
    },
    {
        name:'lmissyou',
        path:'music/lmissyou-MrSiro-189118.mp3',
        artist:'MrSiro',
        image:'https://i.ytimg.com/vi/5euMV9KfZnM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsAwdo4UMunazxZ-UfGEzebtfqmw'
    },
    {
        name:'ThangBeCamQuyen',
        path:'music/ThangBeCamQuyen-Xavi-6298582.mp3',
        artist:'Xavi',
        image:'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fb/fc/05/fbfc058b-8472-20a6-8400-6689a1be2352/cover.jpg/600x600bf-60.jpg'
    },
    {
        name:'LKDemVuTruong',
        path:'music/LKDemVuTruongPhanToTamLive-PhuongPhuongThao-6606664.mp3',
        artist:'PhuongPhuongThao',
        image:'https://avatar-ex-swe.nixcdn.com/song/2023/07/20/1/4/e/c/1689853567543_640.jpg'
    },
    {
        name:'Quỳnh Hương',
        path:'music/[Lyric] Quỳnh Hương - JGKiD, Đen (Trịnh Công Sơn) (Phụ Đề).mp4',
        artist:'JGKiD, Đen (Trịnh Công Sơn)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkK2QdWvZYSthnFVVxAYYYp6KHyhFF5cj2XURSRLFfQToOP8H8p1GDzPwUcu-p5YP_UI&usqp=CAU'
    },
    {
        name:'Dù Cho Mai Về Sau',
        path:'music/DuChoMaiVeSau-buitruonglinh-6818907.mp3',
        artist:'buitruonglinh',
        image:'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/0/8/5/0/0850b7d79b732fd99e3383909f807d58.jpg'
    },
    {
        name:'Nếu Lúc Trước Em Dừng Tới',
        path:'music/NeuLucTruocEmDungToiLiveVersion-KhaiDang-7584149.mp3',
        artist:'KhaiDang',
        image:'https://i.ytimg.com/vi/jDZ1BfEGIl8/hqdefault.jpg'
    },
    {
        name:'Ngày Mai Người Ta Lấy Chồng',
        path:'music/NgayMaiNguoiTaLayChongCover-NgocKara-10253574.mp3',
        artist:'NgocKara',
        image:'https://musescore.com/static/musescore/scoredata/g/f799c51632113b06736e0c169a8ff9ae903cc01e/score_0.svg?no-cache=1695834825'
    },
];