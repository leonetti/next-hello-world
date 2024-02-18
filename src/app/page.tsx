import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardBody, Button } from '@nextui-org/react';
import Image from 'next/image';

import work from '@public/images/work.webp';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center px-4">
        <Card className="py-4 max-w-full md:max-w-xl lg:max-w-2xl mx-auto my-10">
          <CardBody className="overflow-visible py-2 text-balance">
            <div className="flex flex-col xs:flex-row gap-6 items-center justify-center text-center md:text-left">
              <Image
                alt="Work"
                className="w-48 h-auto object-cover"
                src={work}
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold uppercase">Work</h2>
                <p className="text-sm text-default-500">
                  Software engineer, programmer, coder.
                </p>

                <div className="mb-6 mt-2 flex gap-3 flex-wrap justify-center">
                  <span className="font-bold">$100/hr</span>
                  <span className="text-default-600 line-through">$200/hr</span>
                  <span className="text-success">50% off</span>
                </div>

                <div className="mt-6 flex gap-6 flex-wrap justify-center">
                  <Button color="primary">Buy now</Button>
                  <Button color="primary" variant="bordered" radius="full">
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
