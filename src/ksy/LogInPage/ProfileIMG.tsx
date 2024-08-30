const MyProfileImg = () => {
    return (
        <div className="flex justify-center">
            <div className="w-52 h-52 flex items-center justify-center rounded-full border shadow-md">
                <img
                    src="/cat.jpg"
                    alt="프로필 이미지"
                    className="w-52 h-52 bg-cover rounded-full bg-center text-center" />
            </div>
        </div>
    );
}

export default MyProfileImg;