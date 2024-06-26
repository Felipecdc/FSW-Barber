"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbeshopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbeshopItemProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-1 pb-0">
        <div className="w-full h-[159px] relative">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
          <div className="absolute left-2 top-2 z-50 ">
            <Badge
              variant="secondary"
              className="flex items-center opacity-90 gap-1 justify-center"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
        </div>
        <div className="px-2 pb-3">
          <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            className="w-full mt-3"
            variant="secondary"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
