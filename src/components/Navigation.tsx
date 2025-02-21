import Link from 'next/link';
import navigationData from '@/data/navigation.json';

// ... in components
<nav>
  {navigationData.mainNav.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.title}
    </Link>
  ))}
</nav> 