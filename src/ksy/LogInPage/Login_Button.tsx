const LoginBtn = () => {
    return (
        <div>
            <div className="flex justify-end gap-3">
                <button className="w-fit rounded-l-full font-bold text-xs">
                회원가입
                </button>
                <button className="w-fit rounded-r-full font-bold text-xs">
                아이디/비번 찾기
                </button>
            </div>

          {/* 로그인 버튼 */}
            <div className="flex justify-center gap-1 m-2">
                <button className="bg-[#E8DEF8] px-5 py-3 w-4/5 rounded-full font-bold text-sm border border-slate-300">
                    로그인
                </button>
            </div>
        </div>
    )
}

export default LoginBtn;