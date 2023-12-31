import {
  HomeOutlined,
  ContactPhoneOutlined,
  PersonAddAlt1Outlined,
  LibraryAddCheckOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
} from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='flex bg-white h-96vh w-1/4 md:w-1/6 shadow-md rounded-lg flex-col'>
      <div className='flex justify-center w-full my-7'>
        <div>
          <Image
            src='/logos/logoVertical.png'
            alt='Icone'
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
      <nav className='flex flex-col justify-between h-full'>
        <div>
          <Link href={'/'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <HomeOutlined />
                </span>
                <span className='font-normal'> Home </span>
              </div>
            </div>
          </Link>

          <Link href={'/pacientes'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <ContactPhoneOutlined />
                </span>
                <span className='font-normal'> Pacientes </span>
              </div>
            </div>
          </Link>

          <Link href={'/cadastro_pacientes'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <PersonAddAlt1Outlined />
                </span>
                <span className='font-normal'> Cadastro Pacientes </span>
              </div>
            </div>
          </Link>

          <Link href={'/pendencias'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <LibraryAddCheckOutlined />
                </span>
                <span className='font-normal'> Pendências </span>
              </div>
            </div>
          </Link>
        </div>
        <div className='md:pb-3 pb-1'>
          <hr />
          <Link href={'/perfil'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <AccountCircleOutlined />
                </span>
                <span className='font-normal'> Perfil </span>
              </div>
            </div>
          </Link>
          <Link href={'/configuracoes'}>
            <div className='hover:bg-padrao-green-light py-0.5 '>
              <div className='text-md text-padrao-blue flex items-center gap-2 m-4 '>
                <span>
                  <SettingsOutlined />
                </span>
                <span className='font-normal'> Configurações </span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default SideBar
