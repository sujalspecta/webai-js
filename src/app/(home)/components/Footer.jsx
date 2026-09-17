import { currentYear, developedBy } from '@/common/constants';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-default-950/40 backdrop-blur-3xl">
      <div className="border-t border-white/10 py-6">
        <div className="container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-start lg:px-20">
          <p className="text-base font-medium text-gray-400">
            {currentYear} © WebAi -{' '}
            <Link to="">
              Design &amp; Crafted{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart inline h-4 w-4 fill-red-500 text-red-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              &nbsp;by {developedBy}
            </Link>
          </p>
          <p className="text-base font-medium text-gray-400">
            <Link to="">Terms Conditions &amp; Policy</Link>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;