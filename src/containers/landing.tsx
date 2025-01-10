import { Sink } from '@/types/sink';

interface Props {
  drop: number;
  sink: Sink | undefined;
  setDrop: React.Dispatch<React.SetStateAction<number>>;
  setSink: React.Dispatch<React.SetStateAction<Sink | undefined>>;
}

const LandingContainer: React.FC<Props> = ({ drop, sink, setDrop, setSink }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDrop(Number(value));
  };

  return (
    <>
      <label className="text-xl font-semibold">1초에 몇 방울?</label>
      <div className="text-lg flex justify-between items-center w-full">
        <input type="number" className="text-black p-2" value={drop} onChange={handleChange} />
        <p>방울</p>
        <button className="bg-white w-6 h-6 text-black rounded-lg" onClick={() => setDrop(drop + 1)}>
          +
        </button>
        <button
          className="bg-white w-6 h-6 text-black rounded-lg flex items-center justify-center"
          onClick={() => {
            if (drop > 0) setDrop(drop - 1);
          }}
        >
          -
        </button>
      </div>

      <div className="w-full border-t border-white" />

      <label className="text-xl font-semibold">내 싱크대 사이즈는?</label>
      <div className="flex w-full gap-4">
        <button
          className={`w-full border-white border rounded-md p-2 ${
            sink === 'sm' ? 'bg-white text-black font-bold' : ''
          }`}
          onClick={() => setSink('sm')}
        >
          작아요!
          <br />
          (약 24L)
        </button>
        <button
          className={`w-full border-white border rounded-md p-2 ${
            sink === 'lg' ? 'bg-white text-black font-bold' : ''
          }`}
          onClick={() => setSink('lg')}
        >
          커요!
          <br />
          (약 60L)
        </button>
      </div>
    </>
  );
};

export default LandingContainer;
