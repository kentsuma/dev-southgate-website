export default function Button({ label }: { label: string }) {
  return (
    <div className="bg-rivieraparadise inline-block mx-10">
      <button className="my-2 mx-3 sm:my-3 sm:mx-7 text-[15px] sm:text-[17px] lg:text-[20px] text-goodpro text-white">
        {label}
      </button>
    </div>
  );
}
