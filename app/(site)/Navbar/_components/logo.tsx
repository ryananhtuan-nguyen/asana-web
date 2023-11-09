import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="mr-6"
      />
    </Link>
  )
}

export default Logo
