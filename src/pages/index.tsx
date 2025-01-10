import { Sink } from '@/types/sink';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';

const LandingContainer = dynamic(() => import('../containers/landing'), {
  ssr: false,
  loading: () => <>loading...</>,
});
const ResultContainer = dynamic(() => import('../containers/result'), {
  ssr: false,
  loading: () => <>결과를 불러오고 있습니다...</>,
});

export default function Home() {
  const [drop, setDrop] = useState(0);
  const [sink, setSink] = useState<Sink | undefined>(undefined);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleDisabled = () => {
    if (drop > 0 && sink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">물 샐 틈 없는 우리집</h1>
        <Image className="m-auto" src="/assets/images/sink.png" alt="sink logo" width={180} height={180} priority />
        {isSubmit ? (
          <ResultContainer drop={drop} sink={sink} />
        ) : (
          <LandingContainer drop={drop} sink={sink} setDrop={setDrop} setSink={setSink} />
        )}
        <button
          className={`w-full border-white bg-white text-black font-bold border rounded-md p-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed"`}
          onClick={() => setIsSubmit(!isSubmit)}
          disabled={!handleDisabled()}
        >
          {isSubmit ? '다시 계산해보기' : '몇 시간 후에 넘치는지 확인!'}
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-center w-full">Copyright 2025. Wha1e All rights reserved. </p>
      </footer>
    </div>
  );
}
