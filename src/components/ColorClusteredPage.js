import React, { Component } from 'react';
import ClusterRow from './cluster_helpers/ClusterRow';

//https://www.npmjs.com/package/react-multi-carousel


class AllFlickrSlideshow extends Component {
  constructor(props) {
    super(props)

  this.state = {
    images: [
    ['https://live.staticflickr.com/4867/46502432172_0baab25c4f_n.jpg','https://live.staticflickr.com/3353/3545980042_97d0ef586e_n.jpg','https://live.staticflickr.com/4076/4814213414_d8021b5fca_n.jpg','https://live.staticflickr.com/5477/14277367840_8eb2e256ca_n.jpg','https://live.staticflickr.com/8507/8552259220_6a8eca69dc_n.jpg','https://live.staticflickr.com/65535/32790165767_be52306d38_n.jpg','https://live.staticflickr.com/3790/9338578752_56ca2b75a4_n.jpg'],
    ['https://live.staticflickr.com/1834/43348314084_4463ceaa01_n.jpg','https://live.staticflickr.com/7326/9335784885_c8d41699d4_n.jpg','https://live.staticflickr.com/4339/36342240230_1c8d5e26d5_n.jpg','https://live.staticflickr.com/3870/14277387848_51d1032e85_n.jpg','https://live.staticflickr.com/7922/46441496024_6cfa1ec3d9_n.jpg','https://live.staticflickr.com/3585/3545175117_2ae8bbf7e6_n.jpg','https://live.staticflickr.com/7579/16029987930_b529741bee_n.jpg'],
    ['https://live.staticflickr.com/1917/45198747011_ff8c71ba6b_n.jpg','https://live.staticflickr.com/5576/14277464890_e03b4b7284_n.jpg','https://live.staticflickr.com/65535/32790176047_aca707fbcf_n.jpg','https://live.staticflickr.com/7288/9338564876_81023cce07_n.jpg','https://live.staticflickr.com/4442/35773035513_c61d1c9942_n.jpg','https://live.staticflickr.com/2402/2442537508_a12eee7aaa_n.jpg','https://live.staticflickr.com/8045/8135288980_6d10e824bc_n.jpg'],
    ['https://live.staticflickr.com/3820/33358673285_3ae07b1264_n.jpg','https://live.staticflickr.com/5345/9338542604_4de00bc8a2_n.jpg','https://live.staticflickr.com/3231/2443938434_2b24a5e14f_n.jpg','https://live.staticflickr.com/5449/9335789325_b6a6f9258a_n.jpg','https://live.staticflickr.com/2869/12186895993_41543aa3b1_n.jpg','https://live.staticflickr.com/4079/4799696874_52572e0fbd_n.jpg','https://live.staticflickr.com/1763/42621970854_248423de84_n.jpg'],
    ['https://live.staticflickr.com/4173/34088939621_63cd4e0e87_n.jpg','https://live.staticflickr.com/5461/9338557196_080177e27f_n.jpg','https://live.staticflickr.com/65535/32795919797_c8d75b7085_n.jpg','https://live.staticflickr.com/3794/9335773629_1b4cf89556_n.jpg','https://live.staticflickr.com/7309/15757773303_88753c2a6a_n.jpg','https://live.staticflickr.com/4692/38578035245_379252cbc1_n.jpg','https://live.staticflickr.com/4243/34157924323_04dc712b21_n.jpg'],
    ['https://live.staticflickr.com/1761/42475816064_680178532e_n.jpg','https://live.staticflickr.com/8049/8135268571_27bccb65f9_n.jpg','https://live.staticflickr.com/1919/43385139530_316a7e3d4c_n.jpg','https://live.staticflickr.com/7318/9338478436_653bcc84db_n.jpg','https://live.staticflickr.com/8003/7101876713_f5c52d5abb_n.jpg','https://live.staticflickr.com/4611/26798748218_7cbd85919e_n.jpg','https://live.staticflickr.com/5479/11754504944_643f7d88a7_n.jpg'],
    ['https://live.staticflickr.com/4864/46554036641_453f1b851d_n.jpg','https://live.staticflickr.com/2868/9338439786_563ac81089_n.jpg','https://live.staticflickr.com/4311/35530992640_bc78e9d22c_n.jpg','https://live.staticflickr.com/2865/9335688363_7a99f5f995_n.jpg','https://live.staticflickr.com/7609/27082087210_5d8ce04fec_n.jpg','https://live.staticflickr.com/6168/6163829617_eddf0aa858_n.jpg','https://live.staticflickr.com/4784/39792717965_25d272d129_n.jpg'],
    ['https://live.staticflickr.com/3375/3557771587_5445768b93_n.jpg','https://live.staticflickr.com/7409/9335758543_1c5c562f89_n.jpg','https://live.staticflickr.com/950/40517239820_5fc2f16e69_n.jpg','https://live.staticflickr.com/4876/44212190460_be5b8dc51b_n.jpg','https://live.staticflickr.com/8034/8028849050_e54270e995_n.jpg','https://live.staticflickr.com/4818/32441391898_8c5a04070c_n.jpg','https://live.staticflickr.com/8334/8135297926_942cf10fc8_n.jpg'],
    ['https://live.staticflickr.com/2823/33836551662_d01292dd32_n.jpg','https://live.staticflickr.com/5547/9338483712_e8f2199c56_n.jpg','https://live.staticflickr.com/3134/2667093876_b97af94759_n.jpg','https://live.staticflickr.com/3608/3545172995_7d8d25e003_n.jpg','https://live.staticflickr.com/4080/4891029013_9eda382cb7_n.jpg','https://live.staticflickr.com/4270/35007518455_8f0cf8e36f_n.jpg','https://live.staticflickr.com/4273/34969103515_df2d9049d8_n.jpg']
    ],
    dom_colors: [
    ['https://live.staticflickr.com/4867/46502432172_0baab25c4f_n.jpg','https://live.staticflickr.com/3353/3545980042_97d0ef586e_n.jpg','https://live.staticflickr.com/4076/4814213414_d8021b5fca_n.jpg','https://live.staticflickr.com/5477/14277367840_8eb2e256ca_n.jpg','https://live.staticflickr.com/8507/8552259220_6a8eca69dc_n.jpg','https://live.staticflickr.com/65535/32790165767_be52306d38_n.jpg','https://live.staticflickr.com/3790/9338578752_56ca2b75a4_n.jpg'],
    ['https://live.staticflickr.com/1834/43348314084_4463ceaa01_n.jpg','https://live.staticflickr.com/7326/9335784885_c8d41699d4_n.jpg','https://live.staticflickr.com/4339/36342240230_1c8d5e26d5_n.jpg','https://live.staticflickr.com/3870/14277387848_51d1032e85_n.jpg','https://live.staticflickr.com/7922/46441496024_6cfa1ec3d9_n.jpg','https://live.staticflickr.com/3585/3545175117_2ae8bbf7e6_n.jpg','https://live.staticflickr.com/7579/16029987930_b529741bee_n.jpg'],
    ['https://live.staticflickr.com/1917/45198747011_ff8c71ba6b_n.jpg','https://live.staticflickr.com/5576/14277464890_e03b4b7284_n.jpg','https://live.staticflickr.com/65535/32790176047_aca707fbcf_n.jpg','https://live.staticflickr.com/7288/9338564876_81023cce07_n.jpg','https://live.staticflickr.com/4442/35773035513_c61d1c9942_n.jpg','https://live.staticflickr.com/2402/2442537508_a12eee7aaa_n.jpg','https://live.staticflickr.com/8045/8135288980_6d10e824bc_n.jpg'],
    ['https://live.staticflickr.com/3820/33358673285_3ae07b1264_n.jpg','https://live.staticflickr.com/5345/9338542604_4de00bc8a2_n.jpg','https://live.staticflickr.com/3231/2443938434_2b24a5e14f_n.jpg','https://live.staticflickr.com/5449/9335789325_b6a6f9258a_n.jpg','https://live.staticflickr.com/2869/12186895993_41543aa3b1_n.jpg','https://live.staticflickr.com/4079/4799696874_52572e0fbd_n.jpg','https://live.staticflickr.com/1763/42621970854_248423de84_n.jpg'],
    ['https://live.staticflickr.com/4173/34088939621_63cd4e0e87_n.jpg','https://live.staticflickr.com/5461/9338557196_080177e27f_n.jpg','https://live.staticflickr.com/65535/32795919797_c8d75b7085_n.jpg','https://live.staticflickr.com/3794/9335773629_1b4cf89556_n.jpg','https://live.staticflickr.com/7309/15757773303_88753c2a6a_n.jpg','https://live.staticflickr.com/4692/38578035245_379252cbc1_n.jpg','https://live.staticflickr.com/4243/34157924323_04dc712b21_n.jpg'],
    ['https://live.staticflickr.com/1761/42475816064_680178532e_n.jpg','https://live.staticflickr.com/8049/8135268571_27bccb65f9_n.jpg','https://live.staticflickr.com/1919/43385139530_316a7e3d4c_n.jpg','https://live.staticflickr.com/7318/9338478436_653bcc84db_n.jpg','https://live.staticflickr.com/8003/7101876713_f5c52d5abb_n.jpg','https://live.staticflickr.com/4611/26798748218_7cbd85919e_n.jpg','https://live.staticflickr.com/5479/11754504944_643f7d88a7_n.jpg'],
    ['https://live.staticflickr.com/4864/46554036641_453f1b851d_n.jpg','https://live.staticflickr.com/2868/9338439786_563ac81089_n.jpg','https://live.staticflickr.com/4311/35530992640_bc78e9d22c_n.jpg','https://live.staticflickr.com/2865/9335688363_7a99f5f995_n.jpg','https://live.staticflickr.com/7609/27082087210_5d8ce04fec_n.jpg','https://live.staticflickr.com/6168/6163829617_eddf0aa858_n.jpg','https://live.staticflickr.com/4784/39792717965_25d272d129_n.jpg'],
    ['https://live.staticflickr.com/3375/3557771587_5445768b93_n.jpg','https://live.staticflickr.com/7409/9335758543_1c5c562f89_n.jpg','https://live.staticflickr.com/950/40517239820_5fc2f16e69_n.jpg','https://live.staticflickr.com/4876/44212190460_be5b8dc51b_n.jpg','https://live.staticflickr.com/8034/8028849050_e54270e995_n.jpg','https://live.staticflickr.com/4818/32441391898_8c5a04070c_n.jpg','https://live.staticflickr.com/8334/8135297926_942cf10fc8_n.jpg'],
    ['https://live.staticflickr.com/2823/33836551662_d01292dd32_n.jpg','https://live.staticflickr.com/5547/9338483712_e8f2199c56_n.jpg','https://live.staticflickr.com/3134/2667093876_b97af94759_n.jpg','https://live.staticflickr.com/3608/3545172995_7d8d25e003_n.jpg','https://live.staticflickr.com/4080/4891029013_9eda382cb7_n.jpg','https://live.staticflickr.com/4270/35007518455_8f0cf8e36f_n.jpg','https://live.staticflickr.com/4273/34969103515_df2d9049d8_n.jpg']
    ],
    currentIndex: 0,
    translateValue: 0,
    currentChartNum: 0
  }
}
changeColor= () => {
  this.setState(prevState => ({
    currentChartNum: (prevState.currentChartNum+1)%2
  }));
  }
createAllSlides = () => {
    let allSlides = []

    // Outer loop to create parent
    for (let i = 0; i < this.state.images.length-1; i+=1) {//every 3rd, bcuz slow loading

      allSlides.push(  <div
        onClick={this.changeColor}
         style ={ {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
          display: 'inline-block',
          height: '100%',
          width: '100%',
          height: '200px',
          overflow: 'hidden',
          justifyContent: 'center',
          textAlign: 'center'
        }
      }><ClusterRow images={this.state.images[i]} /></div>)
    }
    return allSlides
  }

render() {
  return (
  <div style ={ {
    justifyContent: 'center'
  } }>

    <div style={{  height: '100%',  width: '100%'}}>
    <div  style ={ {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
        display: 'inline-block',
        height: '100%',
        width: '100%',
        height: '20px',
        overflow: 'hidden',
        justifyContent: 'center',
        textAlign: 'center'
      }
    }>
    <div className="slide" style={{backgroundPosition: '50% 60%',  display: 'inline-block',  height: '20px',  width: '200px'}}>Group 1</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 2</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 3</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 4</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 5</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 6</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    <div className="slide" style={{ backgroundPosition: '50% 60%',  display: 'inline-block', height: '20px',  width: '200px'}}>Group 7</div>
    <div style={{width: '10px',   display: 'inline-block',}}></div>
    </div>
    </div>

    {this.createAllSlides()}
  </div>
  );
}

}

export default AllFlickrSlideshow;
