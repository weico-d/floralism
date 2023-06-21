import style from '@/styles/banner.module.css'
import styles from '@/styles/Home.module.css'


export default function BodyBanner(props) {
    ////////////////console.log("flag为:"+props.flag);
    return (<div style={{ width: '100%', position: 'relative' }}>
        {
            <img alt={props.flag === 0 ? props.imgTiny : props.img} src={
                // props.flag === 0 ? props.imgTiny :
                 props.img} style={{ width: '100%', height: '100%', display: 'block' }}></img>
        }
        <div className={style.banner_desc} style={{}}>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                    }
                    <div className={styles.title} style={{ color: "white",fontSize:'1.25vw', marginRight: 16, marginLeft: 16 }}>{props.title}</div>
                    {
                        <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                    }
                </div>
                <div style={{}} className={style.desc_layout}>
                    <div style={{fontSize:'1.25vw'}}>{props.desc1}</div>
                    <div style={{fontSize:'1.25vw',marginTop: 12 }}>{props.desc2}</div>
                </div>
            </div>
        </div>
    </div>)
}