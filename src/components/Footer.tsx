import { Envelope, Handset, LogoFacebook } from '@gravity-ui/icons';
import NavLinkContainer from "./NavLinkContainer";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center px-30 py-8 border-t border-gray-700">
    <NavLinkContainer isMobile={false} />
      <nav>
        <div className="flex items-center justify-center gap-6">
            <p className="flex items-center gap-2"><LogoFacebook />/@gamezone</p>
            <p className="flex items-center gap-2"><Handset />+880 1817-320099</p>
            <p className="flex items-center gap-2"><Envelope />info@gamezone.com</p>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by GameZone
        </p>
      </aside>
    </footer>
  );
}
