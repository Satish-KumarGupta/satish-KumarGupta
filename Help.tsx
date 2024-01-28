import MSCard from '@ms/component/resuable/mscard';
import MSDialog from '@ms/component/resuable/msdialog';
import usePageTitle from '@ms/utils/hooks/usePageTitle';
import MSLayoutWrapper from '@ms/wrapper/mslayoutwrapper';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  usePageTitle('Help');
  const [aboutStatus, setAboutStatus] = useState(false);
  const handleAboutClick = () => {
    setAboutStatus(true);
  };
  const handleAboutClose = () => {
    setAboutStatus(false);
  };
  return (
    <>
      {/* <div className="p-10 ml-[120px] flex flex-col items-center gap-2 text-site-color font-semibold text-lg">
        <div className=" border-b border-site-color cursor-pointer" onClick={handleAboutClick}>
          <p>About ZAP</p>
        </div>
        <div className=" border-b border-site-color cursor-pointer" onClick={handleAboutClick}>
          <p>Report a ZAP issue</p>
        </div>

        <Link to={'/Help/FAQs'}>
          <div className="border-b border-site-color">
            <p>FAQs</p>
          </div>
        </Link>
      </div> */}
      <MSLayoutWrapper coverImage={'/asserts/img/base.jpg'} layoutTitle="">
        <div className="flex flex-col justify-items-center gap-[2rem] items-center w-full">
          <h4 className="text-4xl font-medium text-center">Accelerate your Data & Analytics Process</h4>
          <div className="mt-2 flex gap-6 flex-col">
            <MSCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">Request Advanced Analytics Enviroment</p>
                  <p>For requesting AAE that enables you to embed AI.</p>
                </>
              }
            />
            <div className=" border-t-2" />
            <MSCard
              cardImg="/asserts/img/analytics.png"
              cardContent={
                <>
                  <p className="text-site-color">Request for Data Upload</p>
                  <p>For requesting data upload into ZAP on an adhoc basis.</p>
                </>
              }
            />
          </div>
        </div>
      </MSLayoutWrapper>
      <MSDialog open={aboutStatus} onClose={handleAboutClose}>
        <div className="pl-5 pr-5 mt-2">
          <p className="text-site-color text-lg">You are being redirected</p>
          <p className="mt-4 mb-6 font-medium">
            ESO IT Portal will open in a new tab to report an issuse related to ZAP.
            <br />
            Do you want to proceed?
          </p>
        </div>
      </MSDialog>
    </>
  );
};

export default Help;
