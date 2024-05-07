interface PageProps {
  result: number;
}

export default function Page({ result }: PageProps) {
  return (
    <div>
      <h1>1 + 1의 값은 {result} 입니다</h1>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      result: 1 + 1,
    },
  };
}
