import classNames from 'classnames'
import styles from './styles.module.css'

interface TagProps {
  text: string
  type: 'promo' | 'promotion'
  className?: string
}

const Tag = ({ text, type, className }: TagProps) => {
  return (
    <div className={classNames(styles.tag, styles[`tag-${type}`], className)}>
      <span className="p-0">{text}</span>
    </div>
  )
}

export default Tag
