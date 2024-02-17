import Header from '@components/Header';
import Footer from '@components/Footer';
import { Card, CardBody, Button } from '@nextui-org/react';
import Image from 'next/image';

import diving from '@public/images/diving.webp';

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center px-4">
        <Card className="py-4 max-w-full mx-auto my-10">
          <CardBody className="overflow-visible py-2 text-balance">
            <div className="flex flex-col gap-6 items-center justify-center text-center">
              <Image
                alt="Diving"
                className="w- h-auto object-cover"
                src={diving}
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold uppercase">Diver</h2>
                <p className="text-sm text-default-500">
                  Adventurer &amp; Explorer.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default About;
