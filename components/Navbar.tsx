import Image from 'next/image'
import Link from 'next/link'

import { NavLinks } from '@/constants'
import { getCurrentUser } from '@/lib/session'

import { AuthProviders } from './'

const Navbar = async () => {
	const session = await getCurrentUser()
	console.log(session)

	return (
		<nav className="flexBetween navbar">
			<div className="flexStart flex-1 gap-10">
				<Link href="/">
					<Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
				</Link>
				<ul className="hidden gap-7 text-sm lg:flex">
					{NavLinks.map((link) => (
						<Link href={link.href} key={link.key}>
							{link.text}
						</Link>
					))}
				</ul>
			</div>
			<div className="flexCenter gap-4">
				{session?.user ? (
					<>
						{session?.user?.image && (
							<Image
								src={session.user.image}
								alt={session.user.name}
								width={40}
								height={40}
								className="rounded-full"
							/>
						)}
						<Link href="/create-project">Share Work</Link>
					</>
				) : (
					<AuthProviders />
				)}
			</div>
		</nav>
	)
}

export default Navbar
