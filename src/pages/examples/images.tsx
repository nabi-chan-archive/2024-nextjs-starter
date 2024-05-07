import Image from "next/image";

/**
 * 이미지 최적화 하기 페이지
 *
 * 외부 이미지를 불러오는 경우, next.config.mjs에서 image.domains에 호스트네임을 추가해야합니다.
 *
 * @see next.config.mjs
 */
export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">이미지 최적화 하기</h1>

      <Image
        className="w-full object-contain"
        src="https://placedog.net/1920/1080"
        alt=""
        // 외부 이미지를 불러오는 경우, width / height 속성을 지정해주어야 합니다.
        width={1920}
        height={1080}
      />

      <Image
        className="w-full object-contain"
        src="https://placedog.net/800/600"
        alt=""
        // lazy loading을 지원합니다.
        loading="lazy"
        width={800}
        height={600}
      />

      <Image
        className="w-full object-contain"
        src="https://placedog.net/400/300"
        alt=""
        // 만약 이미지가 중요하다면, eager 를 추가하여 빠르게 로딩할 수 있습니다.
        loading="eager"
        width={400}
        height={300}
      />

      <Image
        className="w-full object-contain"
        src="https://placedog.net/600/1200"
        alt=""
        // 이미지를 불러오는 동안 보여줄 이미지를 지정할 수 있습니다.
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        width={600}
        height={1200}
      />
    </div>
  );
}
