/**
 * Icon resolver — maps icon name strings (from JSON) to react-icons/fi components.
 * Usage: <Icon name="smartphone" size={20} className="text-green-500" />
 */
import {
  FiMonitor, FiSmartphone, FiLayers, FiCode, FiGlobe, FiZap,
  FiLayout, FiRefreshCw, FiShoppingCart, FiPackage, FiDatabase,
  FiCreditCard, FiGrid, FiArrowRightCircle, FiLink, FiTrendingUp,
  FiBarChart2, FiSettings, FiShield, FiActivity, FiHome, FiMapPin,
  FiHeart, FiBookOpen, FiTv, FiFlag, FiUsers, FiTruck, FiClock,
  FiCpu, FiCoffee, FiFileText, FiKey, FiEdit, FiStar, FiArrowRight,
  FiCheck, FiChevronRight, FiChevronLeft, FiChevronDown, FiX,
  FiShoppingBag, FiMail, FiPhone, FiInstagram, FiLinkedin,
  FiTwitter, FiFacebook, FiYoutube, FiAlertCircle,
} from 'react-icons/fi';

const map = {
  'monitor':             FiMonitor,
  'smartphone':          FiSmartphone,
  'layers':              FiLayers,
  'code':                FiCode,
  'globe':               FiGlobe,
  'zap':                 FiZap,
  'layout':              FiLayout,
  'refresh-cw':          FiRefreshCw,
  'shopping-cart':       FiShoppingCart,
  'package':             FiPackage,
  'database':            FiDatabase,
  'credit-card':         FiCreditCard,
  'grid':                FiGrid,
  'arrow-right-circle':  FiArrowRightCircle,
  'link':                FiLink,
  'trending-up':         FiTrendingUp,
  'bar-chart':           FiBarChart2,
  'settings':            FiSettings,
  'shield':              FiShield,
  'activity':            FiActivity,
  'home':                FiHome,
  'map-pin':             FiMapPin,
  'heart':               FiHeart,
  'book-open':           FiBookOpen,
  'tv':                  FiTv,
  'landmark':            FiFlag,
  'users':               FiUsers,
  'truck':               FiTruck,
  'clock':               FiClock,
  'cpu':                 FiCpu,
  'coffee':              FiCoffee,
  'file-text':           FiFileText,
  'key':                 FiKey,
  'edit':                FiEdit,
  'star':                FiStar,
  'arrow-right':         FiArrowRight,
  'check':               FiCheck,
  'chevron-right':       FiChevronRight,
  'chevron-left':        FiChevronLeft,
  'chevron-down':        FiChevronDown,
  'x':                   FiX,
  'shopping-bag':        FiShoppingBag,
  'mail':                FiMail,
  'phone':               FiPhone,
  'instagram':           FiInstagram,
  'linkedin':            FiLinkedin,
  'twitter':             FiTwitter,
  'facebook':            FiFacebook,
  'youtube':             FiYoutube,
  'alert-circle':        FiAlertCircle,
};

export default function Icon({ name = '', size = 20, className = '', style }) {
  const Component = map[name] ?? FiAlertCircle;
  return <Component size={size} className={className} style={style} aria-hidden="true" />;
}
