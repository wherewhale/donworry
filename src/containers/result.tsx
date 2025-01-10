import { Sink } from '@/types/sink';

interface Props {
  drop: number;
  sink: Sink | undefined;
}

const LandingContainer: React.FC<Props> = ({ drop, sink }) => {
  const calculateResult = () => {
    if (sink === 'lg') {
      return 60000 / (drop * 0.05);
    } else {
      return 25000 / (drop * 0.05);
    }
  };

  return (
    <>
      <h2 className="font-bold">싱크대가 모두 차기까지 걸리는 시간</h2>
      <p className="text-3xl">{calculateResult()} 초</p>
      <p className="text-3xl">약 {~~(calculateResult() / 60)} 분</p>
      <p className="text-3xl">약 {~~(calculateResult() / 3600)} 시간</p>
    </>
  );
};

export default LandingContainer;
