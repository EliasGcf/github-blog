import Image from 'next/image';

export function Cover() {
  return (
    <div className="flex max-h-[296px] min-h-[296px] w-screen justify-center bg-app-cover bg-cover bg-center bg-no-repeat">
      <Image src="/svg/logo.svg" alt="" width={148} height={98} className="mt-16 h-fit" />
    </div>
  );
}
