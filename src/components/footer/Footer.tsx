import React from 'react';
import '@/styles/footer.scss';
import { FooterInterface, FooterLinks, useFooter } from '@/hooks/useFooter';
import Link from 'next/link';
import AuthorName from '@/ui/AuthorName';

const Footer: React.FC = () => {
  const { FooterLinkData } = useFooter();

  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="top">
          {FooterLinkData?.map((data: FooterInterface) => (
            <div
              key={data?.id}
              className="item-footer"
            >
              <h3>{data?.mainTitle}</h3>
              <div className="links">
                {data?.links?.map((data: FooterLinks) => (
                  <Link
                    href={data?.href}
                    key={data?.id}
                    className="link"
                  >
                    {data?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <AuthorName />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
