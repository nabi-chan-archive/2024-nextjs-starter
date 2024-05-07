import { Inter, Nanum_Brush_Script, JetBrains_Mono } from "next/font/google";

const inter = Inter({ weight: "variable", subsets: ["latin"] });
const nanumBrush = Nanum_Brush_Script({ weight: "400", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">폰트 최적화 하기</h1>

      <ul className="text-xl flex flex-col gap-2">
        <li className={inter.className}>이것은 inter 폰트 입니다.</li>
        <li className={nanumBrush.className}>
          이것은 나눔손글시폔 폰트 입니다.
        </li>
        <li className={jetbrainsMono.className}>
          이것은 JetBrains Mono 폰트 입니다.
        </li>
      </ul>
    </div>
  );
}
