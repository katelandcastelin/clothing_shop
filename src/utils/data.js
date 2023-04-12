import PotCatFront from '../images/pot-cat-front.jpg';
import PotCatBack from '../images/pot-cat-back.jpg';
import LibertyPipFront from '../images/liberty-pip-front.jpg';
import LibertyPipBack from '../images/liberty-pip-back.jpg';
import AbPatchFront from '../images/ab-patch-front.jpg';
import AbPatchBack from '../images/ab-patch-back.jpg';
import UbChainFront from '../images/ub-chain-front.jpg';
import UbChainBack from '../images/ub-chain-back.jpg';
import PlainBlackFront from '../images/plain-black-front.jpg';
import PlainBlackBack from '../images/plain-black-back.jpg';
import Bov1 from '../images/bov-1.jpg';
import Bov2 from '../images/bov-2.jpg';
import Tap1 from '../images/tap-1.jpeg';
import Tap2 from '../images/tap-2.jpeg';
import UbSn1 from '../images/ub-sn-1.jpg';
import UbSn2 from '../images/ub-sn-2.jpg';
import Bouquet1 from '../images/bouquet-1.png';
import Bouquet2 from '../images/bouquet-2.png';
import CoA1 from '../images/products/coa-1.png';
import CoA2 from '../images/products/coa-2.png';
import PrimFront from '../images/products/prim-front.png';
import PrimBack from '../images/products/prim-back.png';
import GracesFront from '../images/products/graces-front.png';
import GracesBack from '../images/products/graces-back.png';

export const products = [
  {
    name: "Three Graces",
    price: 100,
    bust: "78cm - 83cm",
    waist: "62cm - 67cm",
    imgFront: GracesFront,
    imgBack: GracesBack,
    description: "The Three Graces from Primavera. Made with canvas and twill, lined with satin. Boned with plastic boning.",
    available: true,
    status: "made to order",
  },
  {
    name: "Creation of Adam",
    price: 100,
    bust: "78cm - 83cm",
    waist: "62cm - 67cm",
    imgFront: CoA1,
    imgBack: CoA2,
    description: "The Creation of Adam. Made with canvas and twill, lined with satin. Boned with plastic boning.",
    available: false,
    status: "made to order",
  },
  {
    name: "Primavera",
    price: 100,
    imgFront: PrimFront,
    imgBack: PrimBack,
    description: "la Primavera. Made with canvas and twill, and lined with satin. Boned with plastic boning.",
    available: false,
    status: "made to order",
  },
  {
    name: "Pot Cat",
    price: 100,
    imgFront: PotCatFront,
    imgBack: PotCatBack,
    description: "Made with tapestry and twill, lined with satin. Boned with plastic boning.",
    available: false,
    status: "sold out",
  },
  {
    name: "Liberty",
    price: 200,
    imgFront: LibertyPipFront,
    imgBack: LibertyPipBack,
    description: "Liberty Leading the People. Made with canvas and twill, lined with satin. Boned with plastic boning.",
    available: false,
    status: "sold out",
  },
  {
    name: "Patch work",
    price: 300,
    imgFront: AbPatchFront,
    imgBack: AbPatchBack,
    description: "Almond Blossoms. Made by patching and top stitching scraps together. Lined with deadstock fabric and boned with polyester boning.",
    available: false,
    status: "sold out",
  },
  {
    name: "Chain underbust",
    price: 100,
    imgFront: UbChainFront,
    imgBack: UbChainBack,
    description: "description",
    available: false,
    status: "sold out",
  },
  {
    name: "Plain black",
    price: 200,
    imgFront: PlainBlackFront,
    imgBack: PlainBlackBack,
    description: "description",
    available: false,
    status: "made to order",
  },
  {
    name: "Birth of Venus full bust",
    price: 300,
    imgFront: Bov1,
    imgBack: Bov2,
    description: "description",
    available: false,
    status: "made to order",
  },
  {
    name: "Vintage tapestry",
    price: 200,
    bust: "81cm - 86cm",
    waist: "64cm - 69cm",
    imgFront: Tap1,
    imgBack: Tap2,
    description: "Made using vintage tapestry, lined with satin.",
    available: false,
    status: "one of a kind",
  },
  {
    name: "Starry Night underbust",
    price: 300,
    imgFront: UbSn1,
    imgBack: UbSn2,
    description: "description",
    available: false,
    status: "made to order",
  },
  {
    name: "Bouquet",
    price: 100,
    imgFront: Bouquet1,
    imgBack: Bouquet2,
    description: "description",
    available: false,
    status: "sold out",
  },
]