"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershops: Barbershop;
}

const BarbershopInfo = ({ barbershops }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          size="icon"
          variant="outline"
          className="z-50 top-4 left-4 absolute"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon size={18} />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="z-50 top-4 right-4 absolute"
        >
          <MenuIcon size={18} />
        </Button>
        <Image
          src={barbershops.imageUrl}
          alt={barbershops.name}
          fill
          className="opacity-85"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="font-bold text-xl">{barbershops.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershops.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
