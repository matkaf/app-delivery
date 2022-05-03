import { useNavigate } from 'react-router-dom';

function useNavigation(role) {
  const navigate = useNavigate();
  switch (role) {
  case 'customer':
    navigate('/customer/products');
    break;
  case 'seller':
    navigate('seller/orders');
    break;
  case 'admin':
    navigate('/admin/manage');
    break;
  default:
    navigate('/');
  }
}

export default useNavigation;
