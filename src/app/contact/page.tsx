import SectionContainer from "@/components/SectionContainer";
import { Envelope, Handset, LogoFacebook, MapPin } from "@gravity-ui/icons";

export default function Contact() {
  const size: number = 20;

  return (
    <SectionContainer title="Contact US" subtitle="Our Coontact Info">
      <div className="flex items-center justify-center gap-4 text-xl">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <MapPin height={size} width={size} />
            Location:
          </p>
          <p className="flex items-center gap-2">
            <LogoFacebook height={size} width={size} />
            Facebook:
          </p>
          <p className="flex items-center gap-2">
            <Handset height={size} width={size} />
            Phone:
          </p>
          <p className="flex items-center gap-2">
            <Envelope height={size} width={size} />
            Email:
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p> Chawkbazar, Chattogram, Bangladesh</p>
          <p> https://facebook.com/gamezone</p>
          <p> +880 1817-320099</p>
          <p>info@gamezone.com</p>
        </div>
      </div>
    </SectionContainer>
  );
}
