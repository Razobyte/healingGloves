import { useLocation, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy, } from "react";
import Navbar from "./components/header/header.jsx";
import FooterPage from "./components/footer/footer.jsx";
const Home = lazy(() => import("./components/home/home"));
const About = lazy(() => import("./components/about/about"));
const BlogMain = lazy(() => import("./components/blog/blogmain"));
const ContactUs = lazy(() => import("./components/reachUs/reachUs"));
const BlogDetails1 = lazy(() => import("./components/blog/blogdetails1"));
const Care = lazy(() => import("./components/care/care"));
const OurDoctorsMainPage = lazy(() => import("./components/ourdoctors/ourDoctorsMainPage.jsx"));
const Doctors1 = lazy(() => import("./components/ourdoctors/doctors1.jsx"));
const Doctors2 = lazy(() => import("./components/ourdoctors/doctors2.jsx"));
const Doctors3 = lazy(() => import("./components/ourdoctors/doctors3.jsx"));
const GeneralSurgeon = lazy(() => import("./components/generalsurgen/generalsurgen.jsx"));
const ObestricGynology = lazy(() => import("./components/speciality/obestricgynology/obestricGynology.jsx"));
const Speciality = lazy(() => import("./components/speciality/speciality.jsx"));
const Pactrology = lazy(() => import("./components/speciality/pactrology/pactrology.jsx"));
const Advanced = lazy(() => import("./components/speciality/Advanced/Advanced.jsx"));
const WeightLoss = lazy(() => import("./components/speciality/weightLoss/weightloss.jsx"));
const Ivf = lazy(() => import("./components/speciality/ivf/ivf.jsx"));
const Urology = lazy(() => import("./components/speciality/urology/urology.jsx"));
const Asthetics = lazy(() => import("./components/astehtics/ashtehtics.jsx"));
const News = lazy(() => import("./components/about/newsandmedia/news.jsx"));
const Gallery = lazy(() => import("./components/about/gallery/gallery.jsx"));
const WhyChoose = lazy(() => import("./components/about/whychooseus/whychoose.jsx"));
const Vascular = lazy(() => import("./components/speciality/vascular/vascular.jsx"));
const Piles = lazy(() => import("./components/speciality/pactrology/piles/piles.jsx"));
const Fissures = lazy(() => import("./components/speciality/pactrology/Fissure/Fissure.jsx"));
const Abscess = lazy(() => import("./components/speciality/pactrology/Absecess/Abcesses.jsx"));
const Fistule = lazy(() => import("./components/speciality/pactrology/Fistule/Fistule.jsx"));
const Pilonidal = lazy(() => import("./components/speciality/pactrology/pilonidal/pilonidal.jsx"));
const Sinus = lazy(() => import("./components/speciality/pactrology/sinus/sinus.jsx"));
const Warts = lazy(() => import("./components/speciality/pactrology/warts/warts.jsx"));
const Botox = lazy(() => import("./components/astehtics/botox/botox.jsx"));
const Filer = lazy(() => import("./components/astehtics/filer/filer.jsx"));
const FaceLift = lazy(() => import("./components/astehtics/faceLift/faceLift.jsx"));
const HairTransplant = lazy(() => import("./components/astehtics/hairTransplanet/hairTransplant.jsx"));
const Orofacial = lazy(() => import("./components/astehtics/oroFcial/orofacial.jsx"));
const Prp = lazy(() => import("./components/astehtics/prp/prp.jsx"));
const RfRevaluation = lazy(() => import("./components/astehtics/rf/rf.jsx"));
const GallStones = lazy(() => import("./components/speciality/Advanced/gallstones/gallStones.jsx"));
const InguinalHernia = lazy(() => import("./components/speciality/Advanced/ingunialHernia/ingunial.jsx"));
const IncosinalHernia = lazy(() => import("./components/speciality/Advanced/IncosinalHernia/incosinalHernia.jsx"));
const HitusHernia = lazy(() => import("./components/speciality/Advanced/hitushernia/hitusHernia.jsx"));
const Appendix = lazy(() => import("./components/speciality/Advanced/appendix/appendix.jsx"));
const Umbilcicalhernia = lazy(() => import("./components/speciality/Advanced/umbilicalHernia/umbilicalHernia.jsx"));
const NonSurgical = lazy(() => import("./components/speciality/weightLoss/nonSurgical/nonSurgical.jsx"));
const EndoscopicBallon = lazy(() => import("./components/speciality/weightLoss/endoScopicBallon/endoScopicBallon.jsx"));
const Allurion = lazy(() => import("./components/speciality/weightLoss/allurion/allurion.jsx"));
const Bariatric = lazy(() => import("./components/speciality/weightLoss/bariatric/bariatric.jsx"));
const Circumcision = lazy(() => import("./components/speciality/urology/circcumsicion/circumsicion.jsx"));
const Cystoscopy = lazy(() => import("./components/speciality/urology/Cystoscopy/cystoscopy.jsx"));
const KidneyStone = lazy(() => import("./components/speciality/urology/kidneystone/kidneyStone.jsx"));
const Urs = lazy(() => import("./components/speciality/urology/urs/urs.jsx"));
const Rirs = lazy(() => import("./components/speciality/urology/rirs/rirs.jsx"));
const ProState = lazy(() => import("./components/speciality/urology/proState/proState.jsx"));
const BestInfinity = lazy(() => import("./components/speciality/ivf/bestIvf/bestIvf.jsx"));
const GenticScreening = lazy(() => import("./components/speciality/ivf/geneticScreening/geneticScreening.jsx"));
const HysterscopyAndLaparoscopicTreatment = lazy(() => import("./components/speciality/ivf/hysterscopy/hysterscopy.jsx"));
const Icsi = lazy(() => import("./components/speciality/ivf/icsi/icsi.jsx"));
const Ivfiui = lazy(() => import("./components/speciality/ivf/ivfiui/ivfiui.jsx"));
const VaricoseVeinByLaser = lazy(() => import("./components/speciality/vascular/VaricoseVeinByLaser/varicoseVeinByLaser.jsx"));
const VaricoseVeinSclerotherapy = lazy(() => import('./components/speciality/vascular/varicoseVeinSclerotherapy/varicoseVeinSclerotherapy.jsx'));
const Varicocele = lazy(() => import("./components/speciality/vascular/varicocele/varicocele.jsx"));
const DVT = lazy(() => import("./components/speciality/vascular/dvt/dvt.jsx"));
const AVFistula = lazy(() => import("./components/speciality/vascular/avfistula/avfistula.jsx"));
const PrenatalCare = lazy(() => import('./components/speciality/obestricgynology/parentalCare/parentalCare.jsx'));
const NormalAndHighRiskDelivery = lazy(() => import('./components/speciality/obestricgynology/normalandHigh/normal.jsx'));
const Csection = lazy(() => import("./components/speciality/obestricgynology/cSection/cSection.jsx"));
const PostDeliveryCare = lazy(() => import("./components/speciality/obestricgynology/postDelivery/postDelivery.jsx"));
const Complicated = lazy(() => import("./components/speciality/obestricgynology/complicated/complicated.jsx"));
const LabroScopic = lazy(() => import("./components/speciality/obestricgynology/laproScopic/laproscopic.jsx"));
const OvarianCystSurgery = lazy(() => import("./components/speciality/obestricgynology/ovarian/ovarian.jsx"));
const OpenHysterectomy = lazy(() => import("./components/speciality/obestricgynology/open/open.jsx"));
const MyomaSurgery = lazy(() => import("./components/speciality/obestricgynology/myoma/myoma.jsx"));
const PcodTreatment = lazy(() => import("./components/speciality/obestricgynology/pcod/pcod.jsx"));
const WomenHygin = lazy(() => import("./components/speciality/obestricgynology/womenHygien/woemnHygein.jsx"));
const BlogDetails2 = lazy(() => import("./components/blog/blogdeatils2.jsx"));
const BlogDetails3 = lazy(() => import("./components/blog/blogdetails3.jsx"));
const BlogDetails4 = lazy(() => import("./components/blog/blogdetails4.jsx"));
const BlogDetails5 = lazy(() => import("./components/blog/blogDeatils5.jsx"));
import WhatsAppButton from "./components/whbutton.jsx";
import { SiteWideModal } from "./components/siteModal.jsx";


export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <SiteWideModal/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogdetails1" element={<BlogDetails1 />} />
          <Route path="/blogdetails2" element={<BlogDetails2 />} />
          <Route path="/blogdetails3" element={<BlogDetails3 />} />
          <Route path="/blogdetails4" element={<BlogDetails4 />} />
          <Route path="/blogdetails5" element={<BlogDetails5 />} />
          <Route path="/care" element={<Care />} />
          <Route path="/our-doctors" element={<OurDoctorsMainPage />} />
          <Route path="/doctors1" element={<Doctors1 />} />
          <Route path="/doctors2" element={<Doctors2 />} />
          <Route path="/doctors3" element={<Doctors3 />} />
          <Route path="/speciality/general-surgery" element={<GeneralSurgeon />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/speciality/proctology" element={<Pactrology />} />
          <Route path="/speciality/advanced-laparoscopy-robotics" element={<Advanced />} />
          <Route path="/speciality/weight-loss" element={<WeightLoss />} />
          <Route path="/speciality/obestric-gyno" element={<ObestricGynology />} />
          <Route path="/speciality/ivf-fertility" element={<Ivf />} />
          <Route path="/speciality/urology" element={<Urology />} />
          <Route path="/speciality/asthetics" element={<Asthetics />} />
          <Route path="/" element={<News />} />
          <Route path="/about-us/gallery" element={<Gallery />} />
          <Route path="/about-us/why-choose-us" element={<WhyChoose />} />
          <Route path="/speciality/vascular" element={<Vascular />} />
          <Route path="/speciality/proctolgy/piles" element={<Piles />} />
          <Route path="/speciality/proctolgy/fissures" element={<Fissures />} />
          <Route path="/speciality/proctolgy/abscess" element={<Abscess />} />
          <Route path="/speciality/proctolgy/fistula" element={<Fistule />} />
          <Route path="/speciality/proctolgy/pilonidal" element={<Pilonidal />} />
          <Route path="/speciality/proctolgy/sinus" element={<Sinus />} />
          <Route path="/speciality/proctolgy/warts" element={<Warts />} />
          <Route path="/speciality/asthetics/botox" element={<Botox />} />
          <Route path="/speciality/asthetics/filer" element={<Filer />} />
          <Route path="/speciality/asthetics/facelift" element={<FaceLift />} />
          <Route path="/speciality/asthetics/hairtransplant" element={<HairTransplant />} />
          <Route path="/speciality/asthetics/orofacial" element={<Orofacial />} />
          <Route path="/speciality/asthetics/prp-therapy" element={<Prp />} />
          <Route path="/speciality/asthetics/rf-rejuvenation" element={<RfRevaluation />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/gallstones" element={<GallStones />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/inguinal-hernia" element={<InguinalHernia />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/incisional-hernia" element={<IncosinalHernia />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/hiatus-hernia" element={<HitusHernia />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/umbilical-hernia" element={<Umbilcicalhernia />} />
          <Route path="/speciality/advanced-laparoscopy-robotics/appendix" element={<Appendix />} />
          <Route path="/speciality/weight-loss/non-surgical" element={<NonSurgical />} />
          <Route path="/speciality/weight-loss/endoscopicballon" element={<EndoscopicBallon />} />
          <Route path="/speciality/weight-loss/allurion" element={<Allurion />} />
          <Route path="/speciality/urology/circumcision" element={<Circumcision />} />
          <Route path="/speciality/urology/cystoscopy" element={<Cystoscopy />} />
          <Route path="/speciality/urology/kidney-stone" element={<KidneyStone />} />
          <Route path="/speciality/urology/urs" element={<Urs />} />
          <Route path="/speciality/urology/rirs" element={<Rirs />} />
          <Route path="/speciality/urology/prostate" element={<ProState />} />
          <Route path="/speciality/ivf-fertility/best-infertility-treatment" element={<BestInfinity />} />
          <Route path="/speciality/ivf-fertility/genetic-screening" element={<GenticScreening />} />
          <Route path="/speciality/ivf-fertility/hysteroscopy-laparoscopic-treatment" element={<HysterscopyAndLaparoscopicTreatment />} />
          <Route path="/speciality/ivf-fertility/icsi" element={<Icsi />} />
          <Route path="/speciality/weight-loss-bariatric/bariatric-surgery" element={<Bariatric />} />
          <Route path="/speciality/ivf-fertility/ivf-iui" element={<Ivfiui />} />
          <Route path="/speciality/vascular/varicose-vein-by-laser" element={<VaricoseVeinByLaser />} />
          <Route path="/speciality/vascular/varicose-vein-sclerotherapy" element={<VaricoseVeinSclerotherapy />} />
          <Route path="/speciality/vascular/varicocele" element={<Varicocele />} />
          <Route path="/speciality/vascular/dvt" element={<DVT />} />
          <Route path="/speciality/vascular/av-fistula" element={<AVFistula />} />
          <Route path="/speciality/obstetrics-gyno/prenatal-care" element={<PrenatalCare />} />
          <Route path="/speciality/obstetrics-gyno/normal-high-risk-delivery" element={<NormalAndHighRiskDelivery />} />
          <Route path="/speciality/obstetrics-gyno/c-scetion-lscs" element={<Csection />} />
          <Route path="/speciality/obstetrics-gyno/post-delivery-care" element={<PostDeliveryCare />} />
          <Route path="/speciality/obstetrics-gyno/complicated-pregnancies" element={<Complicated />} />
          <Route path="/speciality/obstetrics-gyno/laparoscopic-hysterectomy" element={<LabroScopic />} />
          <Route path="/speciality/obstetrics-gyno/ovarian-cyst-surgery" element={<OvarianCystSurgery />} />
          <Route path="/speciality/obstetrics-gyno/open-hysterectomy" element={<OpenHysterectomy />} />
          <Route path="/speciality/obstetrics-gyno/myoma-surgery" element={<MyomaSurgery />} />
          <Route path="/speciality/obstetrics-gyno/pcod-treatment" element={<PcodTreatment />} />
          <Route path="/speciality/obstetrics-gyno/women-hygiene-care" element={<WomenHygin />} />
        </Routes>
      </Suspense>
      <FooterPage />


    </>
  )
}