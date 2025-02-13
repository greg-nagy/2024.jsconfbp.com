import React from 'react'
import styles from './wide-image.module.scss'
import Image from 'next/image'

function WideImage({ src, alt = '' }) {
  return (
    <div className={styles.wideimage}>
      <Image
        fill
        src={src}
        alt={alt}
        className={styles.image}
      />
    </div>
  )
}

export default WideImage
