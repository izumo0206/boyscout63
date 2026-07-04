const LINE_URL = "https://line.me/R/ti/p/@139wxgyj"

function LineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-green-50">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl mb-4">
            見学・お問い合わせ
          </h2>
          <p className="text-green-800 text-lg">
            活動の見学や体験は随時受け付けています。お気軽にご連絡ください。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden">
          {/* LINEブランドカラーのヘッダー帯 */}
          <div className="bg-[#06C755] px-8 py-6 flex items-center gap-4">
            <LineIcon className="h-10 w-10 text-white flex-shrink-0" />
            <div className="text-white">
              <p className="text-sm font-medium opacity-90">公式LINEアカウント</p>
              <p className="text-2xl font-bold">@bs_osaka63</p>
            </div>
          </div>

          {/* 本文 */}
          <div className="px-8 py-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              見学・体験入隊のお申し込みや、活動に関するご質問は、
              公式LINEアカウントからお気軽にメッセージをお送りください。
              担当者より通常2〜3日以内にご返信いたします。
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "体験入隊のお申し込み",
                "活動日程・場所のご確認",
                "入団に関するご質問",
                "その他お気軽にどうぞ",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#06C755] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              id="line-contact-button"
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#06C755] hover:bg-[#05b34c] active:bg-[#049e44] text-white text-lg font-bold py-4 px-8 rounded-xl transition-colors shadow-md"
            >
              <LineIcon className="h-6 w-6" />
              LINEで問い合わせる
            </a>

            <p className="text-xs text-gray-400 text-center">
              ボタンをタップするとLINEアプリが起動します
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
