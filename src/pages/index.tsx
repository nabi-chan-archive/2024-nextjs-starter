import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">예제 파일들 ^_^b</h1>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          <Link href="/hello-world" className="text-blue-600">
            기본적인 페이지 만들기 (/hello-world)
          </Link>
        </li>
        <li>
          <Link href="/product-list" className="text-blue-600">
            상품 목록 SSR로 불러오기 (/product-list)
          </Link>
        </li>
        <li>
          <Link href="/static-page" className="text-blue-600">
            정적 페이지 만들기 (/static-page)
          </Link>
        </li>
        <li>
          <Link href="/static-paths/1" className="text-blue-600">
            인자가 다양한 정적 페이지 만들기 (/static-paths/[product-id])
          </Link>
        </li>
        <li>
          <Link href="/api/ping" className="text-blue-600">
            API 만들기 (/api/ping)
          </Link>
        </li>
        <li>
          <Link
            href="https://sample-project-git-pr-comment-test-nabichan.vercel.app"
            className="text-blue-600"
          >
            PR Preview Comment 보기
          </Link>
        </li>
      </ul>
      <h1 className="text-2xl font-bold mt-8 mb-4">추가적인 예제들 ^_^v</h1>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          <Link href="/examples/font" className="text-blue-600">
            폰트 최적화 하기 (/examples/font)
          </Link>
        </li>
        <li>
          <Link href="/examples/font" className="text-blue-600">
            이미지 최적화 하기 (/examples/images)
          </Link>
        </li>
      </ul>
    </main>
  );
}
