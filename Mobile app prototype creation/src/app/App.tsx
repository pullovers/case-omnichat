import { useState, useEffect } from 'react';
import {
  Shirt, Sparkles, Hammer, Armchair, ShoppingBag, Dumbbell,
  GraduationCap, PawPrint, Gem, ShoppingCart,
  TrendingUp, ArrowRight, Clock, CheckCircle2
} from 'lucide-react';

function OmniChatLogo({ height = 28, style }: { height?: number; style?: React.CSSProperties }) {
  const scale = height / 35;
  return (
    <svg width={135 * scale} height={height} viewBox="0 0 135 35" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path d="M1.41553 34.3704C1.03069 34.3704 0.616252 34.2519 0.320223 33.8963C0.142606 33.6889 -0.212628 33.1259 0.17221 32.2667C0.438636 31.6444 1.82997 29.1259 2.45163 27.9407C1.56355 26.3407 1.1491 24.4741 1.1491 22.4V11.3778C1.1491 5.12593 6.2408 0 12.5166 0H23.5289C29.7751 0 34.8964 5.0963 34.8964 11.3778V22.4C34.8964 28.6518 29.8047 33.7778 23.5289 33.7778H12.5166C10.1188 33.7778 8.313 33.2444 6.53683 32L6.32961 32.0889L2.0964 34.2519C2.0964 34.2519 1.94838 34.3111 1.85957 34.3407C1.74116 34.3704 1.59315 34.4 1.41553 34.4M6.68484 29.5111C6.95127 29.5111 7.18809 29.6 7.39531 29.7481C8.93466 30.963 10.3852 31.437 12.487 31.437H23.4993C28.4726 31.437 32.5282 27.3778 32.5282 22.4V11.3778C32.5282 6.4 28.4726 2.34074 23.4993 2.34074H12.487C7.51373 2.34074 3.45813 6.4 3.45813 11.3778V22.4C3.45813 24.2963 3.90217 25.9259 4.76066 27.2889C4.99748 27.6444 4.99748 28.0889 4.79026 28.4741C4.49423 29.0074 3.96138 29.9852 3.48773 30.9037L5.29351 29.9852C5.29351 29.9852 5.35271 29.9852 5.38232 29.9556L6.2408 29.6C6.2408 29.6 6.53683 29.5111 6.68484 29.5111Z" fill="#FFBC00"/>
      <path d="M25.2756 12.3259C25.0684 12.0296 24.7132 11.8222 24.3283 11.8222H13.0496L12.4872 10.3111C12.3096 9.86661 11.8951 9.57031 11.3919 9.57031H9.37888C8.72761 9.57031 8.22437 10.1036 8.22437 10.7259C8.22437 11.3481 8.75722 11.8814 9.37888 11.8814H10.5926L11.1551 13.3629L13.2273 19.9407C13.3753 20.4148 13.8193 20.7407 14.3226 20.7407H22.0193C22.5226 20.7407 22.937 20.4148 23.1146 19.9703L25.4236 13.3629C25.5421 13.0074 25.4828 12.6222 25.2756 12.2962M21.1904 18.4296H15.181L13.8489 14.1629H22.7298L21.22 18.4296H21.1904Z" fill="#FFBC00"/>
      <path d="M15.4178 22.8448C15.4178 23.7633 14.6777 24.5041 13.7601 24.5041C12.8424 24.5041 12.1023 23.7633 12.1023 22.8448C12.1023 21.9263 12.8424 21.1855 13.7601 21.1855C14.6777 21.1855 15.4178 21.9263 15.4178 22.8448Z" fill="#FFBC00"/>
      <path d="M24.4764 22.8448C24.4764 23.7633 23.7363 24.5041 22.8187 24.5041C21.901 24.5041 21.1609 23.7633 21.1609 22.8448C21.1609 21.9263 21.901 21.1855 22.8187 21.1855C23.7363 21.1855 24.4764 21.9263 24.4764 22.8448Z" fill="#FFBC00"/>
      <path d="M47.8329 24.6227C46.7672 24.6227 45.7903 24.4153 44.9318 24.0005C44.0733 23.5857 43.3333 23.0227 42.7116 22.3413C42.0899 21.6598 41.6163 20.8598 41.2611 19.9709C40.9058 19.082 40.7578 18.1635 40.7578 17.245C40.7578 16.3264 40.9354 15.3487 41.2907 14.4598C41.6459 13.5709 42.1491 12.8005 42.7708 12.0894C43.3925 11.4079 44.1621 10.8746 45.0206 10.4598C45.9087 10.045 46.856 9.86719 47.8625 9.86719C48.869 9.86719 49.8755 10.0746 50.734 10.519C51.5925 10.9635 52.3325 11.5264 52.9542 12.2079C53.5759 12.919 54.0495 13.6894 54.3751 14.5783C54.7304 15.4672 54.8784 16.3561 54.8784 17.2746C54.8784 18.2524 54.7008 19.1709 54.3455 20.0598C53.9903 20.9487 53.4871 21.719 52.8654 22.4005C52.2437 23.082 51.4741 23.6153 50.6156 24.0301C49.7275 24.445 48.7802 24.6227 47.7737 24.6227M43.5997 17.245C43.5997 17.8672 43.6885 18.4894 43.8957 19.082C44.0733 19.6746 44.3694 20.1783 44.7246 20.6524C45.0798 21.0968 45.5239 21.4524 46.0567 21.7487C46.5896 22.0153 47.1816 22.1635 47.8625 22.1635C48.5434 22.1635 49.1354 22.0153 49.6683 21.7487C50.2011 21.482 50.6452 21.0968 51.0004 20.6227C51.3556 20.1487 51.6221 19.645 51.8293 19.0524C52.0069 18.4598 52.0957 17.8672 52.0957 17.2746C52.0957 16.682 52.0069 16.0302 51.7997 15.4376C51.5925 14.845 51.326 14.3413 50.9708 13.8672C50.6156 13.4227 50.1715 13.0672 49.6387 12.8005C49.1058 12.5339 48.5138 12.4153 47.8625 12.4153C47.2112 12.4153 46.56 12.5635 46.0271 12.8302C45.4943 13.0968 45.0502 13.482 44.695 13.9264C44.3398 14.3709 44.0733 14.9042 43.8957 15.4968C43.7181 16.0894 43.6293 16.682 43.6293 17.2746" fill="#FFBC00"/>
      <path d="M73.1731 24.5333H70.4201V18.5184C70.4201 17.6592 70.2721 17.037 69.976 16.6221C69.68 16.237 69.2656 16.0296 68.7623 16.0296C68.2295 16.0296 67.6966 16.237 67.223 16.6518C66.7493 17.0666 66.3941 17.5999 66.1869 18.2814V24.5333H63.4338V18.5184C63.4338 17.6592 63.2858 17.037 62.9897 16.6221C62.6937 16.237 62.2793 16.0296 61.776 16.0296C61.2728 16.0296 60.7399 16.237 60.2367 16.6518C59.763 17.0666 59.4078 17.5999 59.2006 18.2814V24.5629H56.4475V13.837H58.9341V15.8221C59.319 15.111 59.8814 14.5777 60.5623 14.2221C61.2432 13.837 62.0425 13.6592 62.9305 13.6592C63.8186 13.6592 64.5291 13.8666 65.0323 14.311C65.5356 14.7555 65.8316 15.2888 65.9796 15.9407C66.4237 15.1999 66.9565 14.637 67.6374 14.2518C68.3183 13.8666 69.0583 13.6592 69.9168 13.6592C70.5681 13.6592 71.1009 13.7777 71.545 14.0147C71.9594 14.2518 72.285 14.5777 72.5219 14.9925C72.7587 15.3777 72.9067 15.8518 72.9955 16.3555C73.0843 16.8592 73.1139 17.3629 73.1139 17.8962V24.5925L73.1731 24.5333Z" fill="#FFBC00"/>
      <path d="M85.0735 24.5333H82.3205V18.5184C82.3205 17.6592 82.1724 17.037 81.8764 16.6221C81.5804 16.237 81.1659 16.0296 80.6331 16.0296C80.3667 16.0296 80.0706 16.0888 79.8042 16.2073C79.5378 16.3258 79.2418 16.474 79.0049 16.6814C78.7385 16.8888 78.5313 17.1258 78.3241 17.3925C78.1168 17.6592 77.9688 17.9555 77.88 18.2814V24.5629H75.127V13.837H77.6136V15.8221C77.9984 15.1407 78.5905 14.6073 79.3306 14.2221C80.0706 13.837 80.9291 13.6592 81.8764 13.6592C82.5573 13.6592 83.0901 13.7777 83.5046 14.0147C83.919 14.2518 84.2446 14.5777 84.4815 14.9925C84.7183 15.3777 84.8663 15.8518 84.9551 16.3555C85.0439 16.8592 85.0735 17.3629 85.0735 17.8962V24.5925V24.5333Z" fill="#FFBC00"/>
      <path d="M86.9976 10.9333C86.9976 10.1925 87.6192 9.57031 88.3593 9.57031C89.0994 9.57031 89.721 10.1925 89.721 10.9333C89.721 11.674 89.0994 12.2962 88.3593 12.2962C87.6192 12.2962 86.9976 11.674 86.9976 10.9333ZM86.9976 13.7777H89.7506V24.5036H86.9976V13.7777Z" fill="#FFBC00"/>
      <path d="M91.3195 17.1554C91.3195 16.2665 91.4675 15.3776 91.7932 14.5184C92.1188 13.6591 92.5924 12.8887 93.1845 12.2073C93.8062 11.5258 94.5462 10.9628 95.4343 10.548C96.3224 10.1332 97.3289 9.92578 98.4538 9.92578C99.786 9.92578 100.94 10.2221 101.917 10.8147C102.894 11.4073 103.634 12.1776 104.108 13.0962L101.947 14.5776C101.769 14.1628 101.533 13.8369 101.236 13.5406C100.97 13.2739 100.674 13.0369 100.348 12.8887C100.023 12.711 99.6971 12.5924 99.3715 12.5332C99.0163 12.4443 98.6906 12.4147 98.365 12.4147C97.6545 12.4147 97.0329 12.5628 96.5 12.8591C95.9672 13.1554 95.5231 13.511 95.1975 13.985C94.8423 14.4295 94.5758 14.9628 94.3982 15.5554C94.2206 16.148 94.1318 16.711 94.1318 17.2739C94.1318 17.9258 94.2206 18.548 94.4278 19.1406C94.6351 19.7332 94.9311 20.2665 95.2863 20.711C95.6712 21.1554 96.1152 21.511 96.648 21.8073C97.1809 22.0739 97.7433 22.2221 98.365 22.2221C98.6906 22.2221 99.0459 22.1924 99.4011 22.1036C99.7564 22.0147 100.082 21.8962 100.408 21.7184C100.733 21.5406 101.029 21.3036 101.296 21.0369C101.562 20.7702 101.799 20.4147 101.947 20.0295L104.256 21.3628C104.019 21.8962 103.694 22.3999 103.249 22.8147C102.805 23.2295 102.332 23.585 101.799 23.8813C101.266 24.1776 100.674 24.385 100.082 24.5332C99.4603 24.6813 98.8683 24.7702 98.2762 24.7702C97.2401 24.7702 96.2928 24.5628 95.4343 24.1184C94.5758 23.6739 93.8358 23.111 93.2141 22.3999C92.5925 21.6887 92.1188 20.8887 91.7636 19.9999C91.4083 19.111 91.2307 18.1924 91.2307 17.2739" fill="#FFBC00"/>
      <path d="M115.298 24.5336H112.545V18.5188C112.545 17.6595 112.397 17.0373 112.071 16.6521C111.746 16.2373 111.302 16.0595 110.739 16.0595C110.502 16.0595 110.236 16.1188 109.969 16.2373C109.703 16.3558 109.437 16.504 109.2 16.7114C108.963 16.9188 108.726 17.1558 108.519 17.4225C108.312 17.6891 108.164 17.9854 108.075 18.3114V24.5928H105.322V9.62988H108.075V15.8521C108.46 15.141 108.993 14.6077 109.673 14.2521C110.354 13.8669 111.094 13.6891 111.923 13.6891C112.634 13.6891 113.196 13.8077 113.611 14.0447C114.055 14.2817 114.38 14.6077 114.647 14.9928C114.884 15.378 115.061 15.8521 115.15 16.3558C115.239 16.8595 115.298 17.3928 115.298 17.9262V24.6225V24.5336Z" fill="#FFBC00"/>
      <path d="M120.182 24.7403C119.65 24.7403 119.176 24.6515 118.732 24.4737C118.288 24.2959 117.903 24.0589 117.577 23.7626C117.252 23.4663 116.985 23.1107 116.808 22.6959C116.63 22.2811 116.541 21.8366 116.541 21.3329C116.541 20.8292 116.66 20.3552 116.867 19.9403C117.104 19.4959 117.4 19.1403 117.814 18.8441C118.229 18.5478 118.702 18.3107 119.265 18.1329C119.827 17.9552 120.449 17.8663 121.1 17.8663C121.574 17.8663 122.047 17.8959 122.491 17.9848C122.935 18.0737 123.35 18.1922 123.705 18.3403V17.7181C123.705 17.007 123.498 16.4737 123.113 16.0885C122.699 15.7033 122.107 15.5255 121.307 15.5255C120.745 15.5255 120.182 15.6144 119.62 15.8218C119.087 16.0292 118.525 16.3255 117.933 16.7107L117.104 14.9626C118.495 14.0441 119.975 13.5996 121.574 13.5996C123.172 13.5996 124.327 13.9848 125.156 14.7255C126.014 15.4959 126.429 16.5922 126.429 18.0144V21.3626C126.429 21.6589 126.488 21.8663 126.577 21.9848C126.665 22.1033 126.843 22.1626 127.08 22.1922V24.5329C126.606 24.6218 126.221 24.6811 125.866 24.6811C125.333 24.6811 124.948 24.5626 124.682 24.3255C124.416 24.0885 124.238 23.7922 124.149 23.407L124.09 22.8144C123.616 23.4366 123.024 23.9107 122.343 24.2366C121.663 24.5626 120.922 24.7403 120.153 24.7403M120.952 22.7255C121.426 22.7255 121.87 22.6366 122.284 22.4885C122.699 22.3107 123.024 22.1033 123.261 21.8366C123.557 21.5996 123.705 21.3329 123.705 21.0663V19.8218C123.38 19.7033 123.024 19.6144 122.639 19.5255C122.255 19.4366 121.899 19.407 121.544 19.407C120.834 19.407 120.242 19.5552 119.798 19.8811C119.354 20.207 119.117 20.6218 119.117 21.0959C119.117 21.57 119.294 21.9552 119.65 22.2515C120.005 22.5478 120.449 22.7255 120.952 22.7255Z" fill="#FFBC00"/>
      <path d="M134.688 23.9701C134.333 24.1479 133.859 24.2961 133.326 24.4738C132.793 24.6516 132.231 24.7109 131.639 24.7109C131.254 24.7109 130.899 24.6516 130.573 24.5627C130.247 24.4738 129.951 24.3257 129.685 24.0887C129.418 23.8813 129.241 23.6146 129.093 23.259C128.945 22.9331 128.856 22.5183 128.856 22.0442V15.8812H127.435V13.7775H128.856V10.2812H131.609V13.7775H133.859V15.8812H131.609V21.1257C131.609 21.5109 131.698 21.7775 131.905 21.9257C132.112 22.0738 132.349 22.1627 132.645 22.1627C132.941 22.1627 133.208 22.1035 133.474 22.0146C133.74 21.9257 133.977 21.8368 134.125 21.7775L134.688 23.9405V23.9701Z" fill="#FFBC00"/>
    </svg>
  );
}

// ── Design tokens ────────────────────────────────────────────────────────────
const D = {
  bg: '#0D0C0B',
  surface: '#1A1917',
  surfaceHover: '#211F1C',
  border: '#2E2B27',
  borderSubtle: '#242120',
  textPrimary: '#F5F1EA',
  textSecondary: '#8A8178',
  textMuted: '#5C5650',
  yellow: '#FFD23F',
  yellowBg: '#1D1A07',
  orange: '#FF8A3D',
  ink: '#080604',
  green: '#25D366',
  inputBg: '#141312',
  progressTrack: '#252220',
};

// ── Types ────────────────────────────────────────────────────────────────────

type Screen = 1 | 2 | 3 | 4 | 5 | 6;

interface QuizState {
  nome: string;
  email: string;
  segmento: string;
  resposta_p1: number;
  resposta_p2: number;
  resposta_p3: number;
  janela_interesse: string;
}

// ── Viewport hook ─────────────────────────────────────────────────────────────

function useViewport() {
  const getVals = () => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1024,
    h: typeof window !== 'undefined' ? window.innerHeight : 844,
  });
  const [vp, setVp] = useState(getVals);
  useEffect(() => {
    const handler = () => setVp(getVals());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return vp;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const segments = [
  { id: 'joias_acessorios', label: 'Joias e acessórios', Icon: Gem },
  { id: 'bens_consumo', label: 'Bens de consumo', Icon: ShoppingCart },
  { id: 'materiais_construcao', label: 'Materiais de construção', Icon: Hammer },
  { id: 'moveis_decoracao', label: 'Móveis e decoração', Icon: Armchair },
  { id: 'calcados', label: 'Calçados', Icon: ShoppingBag },
  { id: 'artigos_esportivos', label: 'Artigos esportivos', Icon: Dumbbell },
  { id: 'educacao', label: 'Educação', Icon: GraduationCap },
  { id: 'pet_shop', label: 'Pet shop', Icon: PawPrint },
  { id: 'vestuario', label: 'Vestuário', Icon: Shirt },
  { id: 'beleza_perfumaria', label: 'Beleza e perfumaria', Icon: Sparkles },
];

const benchmarks: Record<string, { label: string; pct: string }> = {
  joias_acessorios:     { label: 'Joias e acessórios',      pct: '28,52' },
  bens_consumo:         { label: 'Bens de consumo',         pct: '17,96' },
  materiais_construcao: { label: 'Materiais de construção', pct: '15,32' },
  moveis_decoracao:     { label: 'Móveis e decoração',      pct: '14,53' },
  calcados:             { label: 'Calçados',                pct: '12,7'  },
  artigos_esportivos:   { label: 'Artigos esportivos',      pct: '12,35' },
  educacao:             { label: 'Educação',                pct: '11,81' },
  pet_shop:             { label: 'Pet shop',                pct: '11,58' },
  vestuario:            { label: 'Vestuário',               pct: '10,66' },
  beleza_perfumaria:    { label: 'Beleza e perfumaria',     pct: '7,19'  },
};

const q1Options = [
  { id: 'q1a', label: 'Não usamos WhatsApp para vendas' },
  { id: 'q1b', label: 'Usamos de forma manual, sem automação' },
  { id: 'q1c', label: 'Temos automação básica, mas sem integração com e-commerce' },
  { id: 'q1d', label: 'WhatsApp integrado ao e-commerce com catálogo e pedidos' },
];

const q2Options = [
  { id: 'q2a', label: '100% humano, sem bot' },
  { id: 'q2b', label: 'Bot para triagem, vendas só com atendente humano' },
  { id: 'q2c', label: 'Bot resolve parte das vendas, humano fecha os maiores' },
  { id: 'q2d', label: 'IA autônoma conduz e fecha vendas sem intervenção humana' },
];

const q3Options = [
  { id: 'q3a', label: 'Não fazemos campanhas pelo WhatsApp' },
  { id: 'q3b', label: 'Enviamos mensagens manuais para contatos' },
  { id: 'q3c', label: 'Campanhas segmentadas mas sem recuperação automática de carrinho' },
  { id: 'q3d', label: 'Campanhas segmentadas com recuperação de carrinho automatizada' },
];

const janelas = [
  { id: 'manha',       label: 'Manhã — 10h às 12h' },
  { id: 'tarde_inicio', label: 'Início da tarde — 14h às 16h' },
  { id: 'tarde_fim',   label: 'Final da tarde — 16h às 18h' },
];

// ── Logic ────────────────────────────────────────────────────────────────────

function getClassificacao(score: number): { label: string; mensagem: string } {
  if (score <= 3) return { label: 'Iniciante', mensagem: 'Você ainda não está aproveitando o potencial do chat commerce.' };
  if (score <= 6) return { label: 'Em evolução', mensagem: 'Você já começou, mas está deixando receita na mesa.' };
  return { label: 'Avançado', mensagem: 'Sua operação está madura — hora de escalar com IA.' };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Garante que window.dataLayer existe antes de qualquer push
if (typeof window !== 'undefined') {
  (window as any).dataLayer = (window as any).dataLayer || [];
}

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: name, ...params });
  }
}

// ── Shared UI components ─────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: D.textMuted, fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>
          Etapa {step} de {total}
        </span>
        <span style={{ fontSize: 11, color: D.yellow, fontWeight: 700, fontFamily: 'Inter,sans-serif' }}>
          {Math.round((step / total) * 100)}%
        </span>
      </div>
      <div style={{ height: 3, backgroundColor: D.progressTrack, borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(step / total) * 100}%`, background: `linear-gradient(90deg, ${D.yellow} 0%, ${D.orange} 100%)`, borderRadius: 999, transition: 'width 0.4s ease' }} />
      </div>
    </div>
  );
}

function PrimaryButton({ onClick, disabled = false, children }: { onClick?: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '13px 24px',
        borderRadius: 999,
        border: 'none',
        backgroundColor: disabled ? D.surface : D.yellow,
        color: disabled ? D.textMuted : D.ink,
        fontSize: 14,
        fontWeight: 800,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        fontFamily: 'Inter,sans-serif',
        letterSpacing: 0.1,
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

function SelectCard({ selected, onClick, children, style }: { selected: boolean; onClick: () => void; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        borderRadius: 12,
        border: selected ? `1.5px solid ${D.yellow}` : `1.5px solid ${D.border}`,
        backgroundColor: selected ? D.yellowBg : D.surface,
        transition: 'all 0.15s ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, backgroundColor: D.borderSubtle, margin: '10px 0' }} />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: D.yellowBg, border: `1px solid rgba(255,210,63,0.25)`, borderRadius: 999, padding: '3px 10px', marginBottom: 6 }}>
      <span style={{ fontSize: 10, fontWeight: 700, color: D.yellow, fontFamily: 'Inter,sans-serif', letterSpacing: 0.3 }}>{children}</span>
    </div>
  );
}

// ── Nav dots (rendered inside frame) ─────────────────────────────────────────

function getMaxUnlocked(quiz: QuizState): number {
  if (!quiz.nome || !quiz.email) return 1;
  if (!quiz.segmento) return 2;
  if (quiz.resposta_p1 < 0) return 3;
  if (quiz.resposta_p2 < 0) return 4;
  if (quiz.resposta_p3 < 0) return 5;
  return 6;
}

function NavDots({ screen, quiz, goTo }: { screen: Screen; quiz: QuizState; goTo: (s: Screen) => void }) {
  const maxUnlocked = getMaxUnlocked(quiz);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 10px', flexShrink: 0 }}>
      <div style={{ display: 'flex', gap: 6, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '7px 14px', borderRadius: 999 }}>
        {([1, 2, 3, 4, 5, 6] as Screen[]).map(s => {
          const unlocked = s <= maxUnlocked;
          const active = screen === s;
          return (
            <button
              key={s}
              onClick={unlocked ? () => goTo(s) : undefined}
              title={unlocked ? `Tela ${s}` : 'Complete a etapa atual para avançar'}
              style={{
                width: active ? 18 : 6,
                height: 6,
                borderRadius: 999,
                border: 'none',
                backgroundColor: active ? D.yellow : unlocked ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)',
                cursor: unlocked ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s ease',
                padding: 0,
                opacity: unlocked ? 1 : 0.4,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// ── Screen 1 — Lead Capture ──────────────────────────────────────────────────

function Screen1({ onNext }: { onNext: (nome: string, email: string) => void }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const valid = nome.trim().length >= 2 && EMAIL_REGEX.test(email);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    border: `1.5px solid ${D.border}`,
    backgroundColor: D.inputBg,
    fontSize: 14,
    color: D.textPrimary,
    outline: 'none',
    fontFamily: 'Inter,sans-serif',
    boxSizing: 'border-box',
    caretColor: D.yellow,
  };

  function handleNext() {
    if (!valid) return;
    trackEvent('quiz_started');
    trackEvent('lead_captured', { lead_nome: nome, lead_email: email });
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Score Maturidade Chat Commerce',
        content_category: 'Quiz',
      });
    }
    onNext(nome.trim(), email.trim());
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 20px 16px', overflow: 'hidden' }}>
      {/* Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, flexShrink: 0 }}>
        <OmniChatLogo height={26} />
      </div>

      {/* Hero card */}
      <div
        style={{
          background: `linear-gradient(145deg, #1A0D22 0%, #0F0810 100%)`,
          borderRadius: 18,
          padding: '16px 18px',
          marginBottom: 14,
          border: `1px solid rgba(255,210,63,0.12)`,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,210,63,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-block', backgroundColor: D.yellow, color: D.ink, fontSize: 9, fontWeight: 800, letterSpacing: 1.2, textTransform: 'uppercase', padding: '3px 10px', borderRadius: 999, marginBottom: 10, fontFamily: 'Inter,sans-serif' }}>
          Chat Commerce Report 2025
        </div>
        <h1 style={{ color: D.textPrimary, fontSize: 17, fontWeight: 800, lineHeight: 1.25, marginBottom: 8, fontFamily: 'Inter,sans-serif' }}>
          Qual é o nível de maturidade do seu chat commerce?
        </h1>
        <p style={{ color: D.textSecondary, fontSize: 12, lineHeight: 1.45, fontFamily: 'Inter,sans-serif', margin: 0 }}>
          Responda 3 perguntas rápidas e veja como sua operação se compara com o mercado do seu segmento.
        </p>
      </div>

      {/* Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12, flexShrink: 0 }}>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} style={inputStyle} />
        <input type="email" placeholder="E-mail corporativo" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
      </div>

      <div style={{ flexShrink: 0 }}>
        <PrimaryButton onClick={handleNext} disabled={!valid}>
          Quero ver meu diagnóstico <ArrowRight size={15} />
        </PrimaryButton>
      </div>

      <p style={{ textAlign: 'center', fontSize: 10, color: D.textMuted, lineHeight: 1.4, marginTop: 10, fontFamily: 'Inter,sans-serif', flexShrink: 0 }}>
        Leva menos de 2 minutos. Dados usados apenas para envio do resultado.
      </p>
    </div>
  );
}

// ── Screen 2 — Segmento ──────────────────────────────────────────────────────

function Screen2({ initialValue, onNext }: { initialValue: string; onNext: (segmento: string) => void }) {
  const [selected, setSelected] = useState(initialValue);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px 14px', overflow: 'hidden' }}>
      <div style={{ flexShrink: 0 }}>
        <ProgressBar step={1} total={4} />
        <h2 style={{ fontSize: 15, fontWeight: 800, color: D.textPrimary, marginBottom: 12, lineHeight: 1.3, fontFamily: 'Inter,sans-serif' }}>
          Qual é o segmento do seu negócio?
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, flex: 1, minHeight: 0 }}>
        {segments.map(({ id, label, Icon }) => (
          <SelectCard key={id} selected={selected === id} onClick={() => setSelected(id)}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5, padding: '9px 10px' }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, backgroundColor: selected === id ? D.yellow : D.surfaceHover, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background-color 0.15s' }}>
                <Icon size={13} color={selected === id ? D.ink : D.textSecondary} />
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: selected === id ? D.textPrimary : D.textSecondary, lineHeight: 1.3, fontFamily: 'Inter,sans-serif', transition: 'color 0.15s' }}>
                {label}
              </span>
            </div>
          </SelectCard>
        ))}
      </div>

      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <PrimaryButton onClick={selected ? () => onNext(selected) : undefined} disabled={!selected}>
          Continuar <ArrowRight size={15} />
        </PrimaryButton>
      </div>
    </div>
  );
}

// ── Shared question screen (Telas 3, 4, 5) ───────────────────────────────────

function QuestionScreen({ step, tag, title, options, initialIndex, onNext, nextLabel = 'Continuar' }: {
  step: number; tag: string; title: string;
  options: { id: string; label: string }[];
  initialIndex: number;
  onNext: (score: number) => void;
  nextLabel?: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px 14px', overflow: 'hidden' }}>
      <div style={{ flexShrink: 0 }}>
        <ProgressBar step={step} total={4} />
        <Tag>{tag}</Tag>
        <h2 style={{ fontSize: 15, fontWeight: 800, color: D.textPrimary, lineHeight: 1.3, marginBottom: 12, fontFamily: 'Inter,sans-serif' }}>
          {title}
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1, minHeight: 0 }}>
        {options.map(({ id, label }, index) => (
          <SelectCard key={id} selected={selectedIndex === index} onClick={() => setSelectedIndex(index)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', border: selectedIndex === index ? `5px solid ${D.yellow}` : `1.5px solid ${D.border}`, flexShrink: 0, backgroundColor: 'transparent', transition: 'all 0.15s', boxSizing: 'border-box' }} />
              <span style={{ fontSize: 12, fontWeight: selectedIndex === index ? 600 : 400, color: selectedIndex === index ? D.textPrimary : D.textSecondary, lineHeight: 1.4, fontFamily: 'Inter,sans-serif', transition: 'color 0.15s' }}>
                {label}
              </span>
            </div>
          </SelectCard>
        ))}
      </div>

      <div style={{ marginTop: 12, flexShrink: 0 }}>
        <PrimaryButton onClick={selectedIndex >= 0 ? () => onNext(selectedIndex) : undefined} disabled={selectedIndex < 0}>
          {nextLabel} <ArrowRight size={15} />
        </PrimaryButton>
      </div>
    </div>
  );
}

// ── Screen 6 — Resultado ─────────────────────────────────────────────────────

function Screen6({ state }: { state: QuizState }) {
  const [janela, setJanela] = useState(state.janela_interesse);
  const [confirmed, setConfirmed] = useState(false);

  const score = state.resposta_p1 + state.resposta_p2 + state.resposta_p3;
  const { label: classificacao, mensagem } = getClassificacao(score);
  const benchmark = benchmarks[state.segmento] ?? benchmarks['vestuario'];

  // Evento 3: dispara ao montar a tela, depois que score e classificacao estão calculados
  useEffect(() => {
    trackEvent('result_generated', {
      score_total: score,
      classificacao,
      segmento: state.segmento,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleConfirm() {
    setConfirmed(true);
    // Evento 4
    trackEvent('consultation_scheduled', {
      janela_interesse: janela,
      segmento: state.segmento,
      score_total: score,
    });
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Schedule', {
        content_name: 'Consultoria FECBR 2026',
        content_category: 'Estande OmniChat',
      });
    }
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Score hero */}
      <div style={{ background: 'linear-gradient(150deg, #1A0D22 0%, #0F0810 60%, #0D0C0B 100%)', padding: '16px 20px 14px', position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${D.borderSubtle}`, flexShrink: 0 }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,90,140,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: D.yellow, color: D.ink, fontSize: 9, fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999, fontFamily: 'Inter,sans-serif' }}>
            {classificacao}
          </div>
          <OmniChatLogo height={20} style={{ opacity: 0.6 }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
          <span style={{ fontSize: 42, fontWeight: 800, color: '#FFFFFF', lineHeight: 1, fontFamily: 'Inter,sans-serif' }}>{score}</span>
          <span style={{ fontSize: 22, fontWeight: 500, color: D.textMuted, lineHeight: 1, paddingBottom: 6, fontFamily: 'Inter,sans-serif' }}>/9</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: D.yellow, paddingBottom: 8, marginLeft: 8, fontFamily: 'Inter,sans-serif' }}>Seu score</span>
        </div>

        <p style={{ fontSize: 12, color: D.textSecondary, lineHeight: 1.4, fontFamily: 'Inter,sans-serif', margin: 0 }}>{mensagem}</p>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, padding: '12px 18px 14px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        {/* Benchmark */}
        <div style={{ backgroundColor: D.surface, border: `1.5px solid ${D.border}`, borderRadius: 14, padding: '12px 14px', marginBottom: 10, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, backgroundColor: D.yellowBg, border: `1px solid rgba(255,210,63,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={14} color={D.yellow} />
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 500, color: D.textSecondary, lineHeight: 1.45, marginBottom: 3, fontFamily: 'Inter,sans-serif' }}>
                Empresas de{' '}
                <span style={{ color: D.textPrimary, fontWeight: 700 }}>{benchmark.label}</span>{' '}
                têm em média{' '}
                <span style={{ color: D.orange, fontWeight: 800 }}>{benchmark.pct}%</span>{' '}
                do GMV influenciado pelo WhatsApp.
              </p>
              <p style={{ fontSize: 10, color: D.textMuted, fontFamily: 'Inter,sans-serif', margin: 0 }}>Fonte: Chat Commerce Report 2025 — OmniChat</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Invite */}
        <h3 style={{ fontSize: 14, fontWeight: 800, color: D.textPrimary, marginBottom: 3, fontFamily: 'Inter,sans-serif' }}>
          Quer evoluir sua operação na prática?
        </h3>
        <p style={{ fontSize: 11, color: D.textSecondary, lineHeight: 1.45, marginBottom: 10, fontFamily: 'Inter,sans-serif' }}>
          Nossa equipe vai estar no estande da OmniChat no FECBR 2026. Diga em qual horário você pretende passar por lá e deixaremos um consultor disponível preparado com o seu diagnóstico.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10, flexShrink: 0 }}>
          {janelas.map(({ id, label }) => (
            <SelectCard key={id} selected={janela === id} onClick={() => setJanela(id)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px' }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, backgroundColor: janela === id ? D.yellow : D.surfaceHover, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background-color 0.15s' }}>
                  <Clock size={13} color={janela === id ? D.ink : D.textSecondary} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: janela === id ? D.textPrimary : D.textSecondary, fontFamily: 'Inter,sans-serif', transition: 'color 0.15s' }}>
                  {label}
                </span>
                {janela === id && <CheckCircle2 size={14} color={D.yellow} style={{ marginLeft: 'auto' }} />}
              </div>
            </SelectCard>
          ))}
        </div>

        {confirmed ? (
          <div style={{ width: '100%', padding: '13px 24px', borderRadius: 999, backgroundColor: 'rgba(37,211,102,0.15)', border: `1.5px solid rgba(37,211,102,0.35)`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxSizing: 'border-box', flexShrink: 0 }}>
            <CheckCircle2 size={16} color={D.green} />
            <span style={{ fontSize: 13, fontWeight: 800, color: D.green, fontFamily: 'Inter,sans-serif' }}>Interesse confirmado!</span>
          </div>
        ) : (
          <PrimaryButton onClick={janela ? handleConfirm : undefined} disabled={!janela}>
            Confirmar meu interesse <ArrowRight size={15} />
          </PrimaryButton>
        )}

        <p style={{ textAlign: 'center', fontSize: 10, color: D.textMuted, marginTop: 8, fontFamily: 'Inter,sans-serif' }}>
          Você receberá um lembrete no e-mail informado com o nome do consultor que vai te receber.
        </p>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

const INITIAL_STATE: QuizState = {
  nome: '',
  email: '',
  segmento: '',
  resposta_p1: -1,
  resposta_p2: -1,
  resposta_p3: -1,
  janela_interesse: '',
};

export default function App() {
  const [screen, setScreen] = useState<Screen>(1);
  const [quiz, setQuiz] = useState<QuizState>(INITIAL_STATE);
  const { w: vpW, h: vpH } = useViewport();

  // On a real mobile device (narrow viewport), fill the screen.
  // On desktop, show the phone frame mockup.
  const isMobile = vpW <= 500;
  const frameW = isMobile ? vpW : 390;
  const frameH = isMobile ? vpH : Math.min(844, vpH - 40);
  const showFrame = !isMobile;

  function goTo(s: Screen) { setScreen(s); }

  function handleScreen1(nome: string, email: string) { setQuiz(q => ({ ...q, nome, email })); goTo(2); }
  function handleScreen2(segmento: string) { setQuiz(q => ({ ...q, segmento })); goTo(3); }
  function handleScreen3(score: number) { setQuiz(q => ({ ...q, resposta_p1: score })); goTo(4); }
  function handleScreen4(score: number) { setQuiz(q => ({ ...q, resposta_p2: score })); goTo(5); }
  function handleScreen5(score: number) {
    setQuiz(q => ({ ...q, resposta_p3: score }));
    goTo(6);
  }

  const displayState: QuizState = {
    ...quiz,
    resposta_p1: Math.max(0, quiz.resposta_p1),
    resposta_p2: Math.max(0, quiz.resposta_p2),
    resposta_p3: Math.max(0, quiz.resposta_p3),
    segmento: quiz.segmento || 'vestuario',
  };

  const frameStyle: React.CSSProperties = {
    width: frameW,
    height: frameH,
    backgroundColor: D.bg,
    borderRadius: showFrame ? 40 : 0,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: showFrame ? '0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7)' : 'none',
  };

  return (
    <div style={{
      minHeight: '100dvh',
      backgroundColor: isMobile ? D.bg : '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter,sans-serif',
    }}>
      {/* Ambient glow — desktop only */}
      {showFrame && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,210,63,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      )}

      <div style={frameStyle}>
        {/* Notch — desktop only */}
        {showFrame && (
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 32, backgroundColor: '#000000', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, zIndex: 10 }} />
        )}

        {/* Screen content */}
        <div style={{ flex: 1, paddingTop: showFrame ? 32 : 0, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {screen === 1 && <Screen1 onNext={handleScreen1} />}
          {screen === 2 && <Screen2 initialValue={quiz.segmento} onNext={handleScreen2} />}
          {screen === 3 && <QuestionScreen step={2} tag="WhatsApp Commerce" title="Como sua marca usa o WhatsApp hoje?" options={q1Options} initialIndex={quiz.resposta_p1} onNext={handleScreen3} />}
          {screen === 4 && <QuestionScreen step={3} tag="Atendimento" title="Como é o atendimento via chat hoje?" options={q2Options} initialIndex={quiz.resposta_p2} onNext={handleScreen4} />}
          {screen === 5 && <QuestionScreen step={4} tag="Campanhas Ativas" title="Como você usa o WhatsApp para campanhas ativas?" options={q3Options} initialIndex={quiz.resposta_p3} onNext={handleScreen5} nextLabel="Ver meu diagnóstico" />}
          {screen === 6 && <Screen6 state={displayState} />}
        </div>

        {/* Nav dots — always inside frame */}
        <NavDots screen={screen} quiz={quiz} goTo={goTo} />
      </div>
    </div>
  );
}
