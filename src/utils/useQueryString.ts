import { useLocation } from 'react-router-dom';

export default function useQueryString() {
  return Object.fromEntries(new URLSearchParams(useLocation().search));
}
