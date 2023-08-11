import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

type ColumnProps = {
	title: string
	links: string[]
}

const FooterColumn = ({ title, links }: ColumnProps) => (
	<div className="footer_column">
		<h4 className="font-semibold">{title}</h4>
		<ul className="flex flex-col gap-2 font-normal">
			{links.map((link) => (
				<Link href="/" key={link}>
					{link}
				</Link>
			))}
		</ul>
	</div>
)

const Footer = () => {
	return (
		<footer className="flexStart footer">
			<div className="flex w-full flex-col gap-12">
				<div className="flex flex-col items-start">
					<Image src="/logo-purple.svg" alt="Flexibble" width={115} height={38} />
					<p className="mt-5 max-w-xs text-start text-sm font-normal">
						Flexibble is the world`s leading community for creatives to share, grow, and get hired.
					</p>
				</div>
				<div className="flex flex-wrap gap-12">
					<FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
						<FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
					</div>

					<FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

					<div className="flex flex-1 flex-col gap-4">
						<FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
						<FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
					</div>

					<FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
				</div>
			</div>
			<div className="flexBetween footer_copyright">
				<p>@2023 Flexibble. All Rights Reserved</p>
				<p className="text-gray">
					<span className="font-semibold text-black">10,214 </span>projects submitted
				</p>
			</div>
		</footer>
	)
}

export default Footer
