import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    

<footer className="p-4 bg-slate-900 text-center">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline text-red-500">Coffee Sanity™</a>. All Rights Reserved.
        </span>
    </div>
        
        
    <div className='text-center flex flex-row justify-center gap-2 '>
        <a href="/" className='text-yellow-400  [&>*]:mx-auto'>
            <FontAwesomeIcon icon={faFacebook} style={{ height: "2rem" }} />
        </a>
        <a href="/" className='text-yellow-400  [&>*]:mx-auto'>
            <FontAwesomeIcon icon={faInstagram} style={{ height: "2rem" }} />
        </a>
        <a href="/" className='text-yellow-400  [&>*]:mx-auto'>
            <FontAwesomeIcon icon={faXTwitter} style={{ height: "2rem" }} />
        </a>
        <a href="/" className='text-yellow-400  [&>*]:mx-auto'>
            <FontAwesomeIcon icon={faTiktok} style={{ height: "2rem" }} />
        </a>
    </div>
</footer>

  );
}

export default Footer;
