//https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4
import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import ColorSlide from './color_helpers/ColorSlide';
//https://www.npmjs.com/package/react-multi-carousel


class ColorsPage extends Component {
  constructor(props) {
    super(props)

  this.state = {
    yearly_colors:[{year:1800, colors: ['#c9c5c3','#749fb9','#9ebfd9','#224f78','#7ca8d4','#162334','#142f54','#9297a0','#5e6d89']},
    {year:1803, colors: ['#8fa4ac','#687c84','#6f96b1','#eef5fa','#8dafc8','#bcd3e4','#416582','#5d7283','#869aad']},
    {year:1809, colors: ['#513837','#977672','#a5b2be','#777880','#8a7dba','#57437b','#17151a','#c474ac','#e0d2d5']},
    {year:1830, colors: ['#9c6b5f','#1a2223','#e0e8ed','#44647a','#76a4c6','#567ea1','#294967','#666d74','#3e3b41']},
    {year:1833, colors: ['#131313','#474747','#545454','#606060','#7d7d7d','#949494','#9f9f9f','#acacac','#c9c9c9']},
    {year:1838, colors: ['#92c0cd','#5b7a84','#4a5e66','#4b667b','#8797b5','#111317','#482b35','#8b6770','#c6a1a9']},
    {year:1850, colors: ['#252113','#ac9435','#5c571a','#888535','#cbcc8c','#687035','#9dac73','#555955','#819198']},
    {year:1853, colors: ['#98706a','#456777','#d6e7f0','#79a6bf','#66727b','#577ca2','#3a4c62','#1c1d20','#403f46']},
    {year:1867, colors: ['#4a2e08','#645233','#705015','#cbb570','#888766','#1e231e','#4a584a','#b1c0b2','#9aa9aa']},
    {year:1874, colors: ['#4c5c68','#8c949c','#5d646c','#c4cfde','#6d7482','#959cab','#353947','#868998','#565867']},
    {year:1879, colors: ['#98a9ac','#62747d','#a4bbc9','#3b4952','#90979d','#617f9a','#234a75','#575e68','#121a2a']},
    {year:1880, colors: ['#b29f98','#c6dcf2','#6882b3','#d9e2f6','#9fb0d9','#242d60','#6068b5','#4d4b9c','#645a5c']},
    {year:1885, colors: ['#c3e4f8','#7c9cb4','#d2e9fb','#627484','#9dbdda','#456382','#6a87a6','#7c93b6','#5d6b84']},
    {year:1886, colors: ['#262424','#342c2c','#5c5454','#5c4c5c','#130c12','#453a40','#2c1c20','#6e6164','#947e81']},
    {year:1887, colors: ['#504c4b','#97aec0','#2e465c','#6b7f93','#c0cddb','#acb7c4','#b3c1d5','#d9dee7','#444243']},
    {year:1889, colors: ['#466b7d','#5d869c','#293c47','#92b7d3','#387ebb','#6598cd','#215b9b','#3b63ad','#264594']},
    {year:1890, colors: ['#ac8478','#d2d5d6','#91b9d5','#7398bb','#101112','#6a87a4','#547295','#3f4a59','#898688']},
    {year:1896, colors: ['#202020','#4c4c4c','#747474','#7c7c7c','#8f8f8f','#a4a4a4','#acacac','#b4b4b4','#cbcbcb']},
    {year:1898, colors: ['#5c7474','#869ca3','#6b8088','#7d9199','#90a6af','#566972','#bed2dc','#9cabb4','#42535e']},
    {year:1900, colors: ['#757777','#a5b3bd','#2e3237','#596b96','#929396','#7d87bd','#636364','#d2d2d6','#b66c98']},
    {year:1901, colors: ['#2b2b2b','#5b5b5b','#6c6c6c','#747474','#8b8b8b','#a4a4a4','#acacac','#b4b4b4','#d9d9d9']},
    {year:1902, colors: ['#171717','#5c5c5c','#646464','#6c6c6c','#838383','#9c9c9c','#a4a4a4','#acacac','#d1d1d1']},
    {year:1904, colors: ['#b48c80','#dbdbd5','#425043','#7aa586','#95a399','#a6d1b9','#447492','#4da1e3','#18283c']},
    {year:1905, colors: ['#7d7873','#4b4640','#918c80','#645e4c','#397c79','#bbc7ce','#1b2731','#5d6e7e','#819ab3']},
    {year:1906, colors: ['#242424','#575757','#646464','#747474','#909090','#a4a4a4','#b4b4b4','#c4c4c4','#d7d7d7']},
    {year:1907, colors: ['#444343','#6c6b6b','#dadada','#4c4c4b','#c1d7e7','#9fa3a6','#abc4d9','#1a1c1e','#59646f']},
    {year:1909, colors: ['#3e3e3e','#676767','#8a8a8a','#737474','#9ca4a4','#bbbcbd','#9c9ca4','#6e6c74','#a49ca4']},
    {year:1910, colors: ['#626363','#d4d8d8','#8e9192','#a3b3bb','#6b7b85','#2b2f32','#657cb7','#3d5186','#b4a4ac']},
    {year:1911, colors: ['#8f8d8a','#595956','#d0d1d1','#3c64ac','#909ab5','#69688a','#4a4669','#1d1c24','#807d89']},
    {year:1912, colors: ['#acacac','#d6d7d7','#99b0b5','#637c84','#5d6061','#292d2f','#8397a7','#596877','#858789']},
    {year:1913, colors: ['#636261','#b49c7c','#353432','#888887','#5e8a87','#9bb9b7','#e2e3e3','#9ba3a4','#717374']},
    {year:1914, colors: ['#aca4a4','#626664','#373f3c','#6b8280','#888d8d','#75bec0','#6a7375','#97a2a6','#d0d3dc']},
    {year:1915, colors: ['#929493','#595c5b','#878888','#9da5a6','#3c6c77','#191d1e','#6b7375','#d4d6d7','#4b4c4d']},
    {year:1916, colors: ['#897573','#6e7d7d','#d0d7db','#93bedd','#34393e','#4b5f74','#7484a0','#5b7dcf','#b48c8d']},
    {year:1917, colors: ['#48473f','#4f584e','#66807f','#d3f3f2','#bee7e6','#95b6b9','#31464b','#50676d','#5f8799']},
    {year:1919, colors: ['#757d78','#6b7c75','#4d585c','#c7d6de','#9cb1c2','#6e8295','#8199b9','#101c33','#0b0912']},
    {year:1920, colors: ['#938a8a','#b46464','#655d5a','#717a7d','#9cb6c1','#292b2c','#cfd0d2','#7188c3','#455583']},
    {year:1922, colors: ['#111111','#484848','#545454','#646464','#848484','#9c9c9c','#a7a7a7','#b4b4b4','#d2d2d2']},
    {year:1923, colors: ['#f8faf8','#566a62','#868b8a','#1f5d5d','#577475','#3ca4ab','#8fd5de','#4fa0ab','#38a3b8']},
    {year:1924, colors: ['#202020','#535353','#7f7f7f','#636464','#9b9c9c','#c6c7c7','#94949c','#5d5c64','#a49ca4']},
    {year:1925, colors: ['#171717','#777777','#5b5c5d','#979a9d','#c7cbcf','#6776b7','#454666','#a47cd4','#4b4a4b']},
    {year:1926, colors: ['#303030','#676767','#747474','#808080','#989898','#acacac','#b4b4b4','#bcbcbc','#dbdbdb']},
    {year:1927, colors: ['#ada49f','#8e9091','#6b7981','#98bbd0','#c0ced7','#6685b7','#384c81','#303134','#626263']},
    {year:1928, colors: ['#585858','#a7a8a8','#1f1f20','#636364','#6f6f70','#8b8b8c','#d7d7d8','#9c9ba4','#b4acb4']},
    {year:1929, colors: ['#4b4b4b','#ac8c30','#7e807f','#141515','#9da2a4','#cbcdce','#5d6266','#7f8ea1','#445060']},
    {year:1930, colors: ['#ac7434','#858684','#555655','#61757a','#90b1c3','#ccd4d9','#1e1f22','#5a6ec0','#414780']},
    {year:1931, colors: ['#2a2929','#504747','#626262','#837875','#896048','#a59273','#cacac7','#426468','#8c8c8d']},
    {year:1932, colors: ['#dfdfdf','#625c4f','#878b7d','#afb9bd','#3474dc','#616a8e','#7a757e','#4e4152','#191618']},
    {year:1933, colors: ['#353733','#7c9796','#98a1a3','#d7e4ea','#a4d1e9','#576674','#7ca0d8','#203e73','#15151a']},
    {year:1934, colors: ['#464646','#506b61','#88a9a1','#787e7e','#c2d0d4','#314077','#4155b6','#161415','#a48494']},
    {year:1935, colors: ['#ac7468','#7d7b7a','#504b48','#5f666b','#99a2aa','#cacbcc','#314475','#506fc0','#1b1b1e']},
    {year:1936, colors: ['#495458','#cbd8dd','#6eacea','#3a5dc0','#2c3e7b','#1d254e','#121320','#565657','#948c9c']},
    {year:1937, colors: ['#7d939f','#cfdde6','#abc2d6','#999c9f','#9badc5','#19263a','#525b6b','#292335','#1f1820']},
    {year:1938, colors: ['#4b4b4b','#c3c4c4','#8ea1bc','#595e66','#5879ae','#25427a','#181a21','#7b7b7c','#a48494']},
    {year:1939, colors: ['#b47c5a','#a1abbb','#6d7990','#3959d6','#353b65','#2433ac','#8c8a91','#d5d4d7','#241d1f']},
    {year:1940, colors: ['#86807f','#58514f','#686c6a','#8db0c8','#3e5d8a','#1d2128','#5b6ec5','#cdced3','#b45267']},
    {year:1941, colors: ['#545353','#121313','#5f6060','#3f68b3','#899eca','#aeb8ce','#495a82','#2d3350','#947c8c']},
    {year:1942, colors: ['#434a45','#5f6564','#eaedee','#b4d0de','#899eb2','#304b6b','#4c5ba9','#23244e','#6058ca']},
    {year:1943, colors: ['#a49484','#454a4a','#797f7f','#476870','#96a2a5','#c8d3d6','#334f5e','#828f9f','#13171d']},
    {year:1944, colors: ['#bebebe','#ad843c','#4c4b49','#80807e','#1a1b1a','#616566','#a1a5a8','#565a5e','#93989f']},
    {year:1945, colors: ['#565453','#ac743c','#898681','#c5c4c2','#61747b','#94adb7','#6d86b2','#232529','#42547a']},
    {year:1946, colors: ['#141111','#475457','#799fc1','#b3b9c2','#455c7f','#4568ac','#2e3448','#947c98','#585354']},
    {year:1947, colors: ['#ac6c5c','#575250','#858483','#607374','#222728','#93b2c3','#c9d0d5','#6f89b3','#44527b']},
    {year:1948, colors: ['#a4847c','#7d7b7a','#5e675a','#b9bdc1','#92a5bb','#6d83b0','#4d5c7c','#1a1c26','#4f4648']},
    {year:1949, colors: ['#1b1b1b','#c14611','#688294','#97b5d0','#8b8d92','#bfc4d1','#667cc4','#3a3f54','#394b98']},
    {year:1950, colors: ['#564a49','#b65b3f','#867e7b','#61695e','#d4d6d7','#97b4ca','#45568b','#5e69c6','#1f1f26']},
    {year:1951, colors: ['#755a51','#d05f21','#9b9490','#7e7f7b','#d0d5d9','#a3c2e0','#7183d0','#393b47','#5e60a0']},
    {year:1952, colors: ['#565351','#999995','#7f8687','#ced1d3','#aeb8c1','#0f1115','#798cc2','#556396','#272226']},
    {year:1953, colors: ['#c49c9c','#a09f9b','#7b817b','#afc8d5','#d1d4d7','#6670a3','#7a86d0','#343336','#6c696a']},
    {year:1954, colors: ['#525151','#c47464','#9d9c98','#d5d7d6','#7d8787','#7dcae2','#597bcf','#0e121d','#36419f']},
    {year:1955, colors: ['#969494','#bd8c40','#757875','#a1bed1','#cacfd5','#687fd0','#515b9b','#2b2739','#655d5e']},
    {year:1956, colors: ['#645e4e','#8d8d84','#3ba4c0','#adb5c7','#616f95','#e3e3e4','#292638','#7a7488','#513f57']},
    {year:1957, colors: ['#908d8b','#bc945d','#ced6db','#a5c1d8','#6c7a87','#25282c','#7c8dc8','#49538c','#5e5c5f']},
    {year:1958, colors: ['#979797','#bc9c7e','#666655','#73807a','#cbced1','#aab9ce','#2e2f31','#7284cc','#454c93']},
    {year:1959, colors: ['#352d2a','#c08c54','#606161','#99c4db','#d1d5d8','#7b8bad','#83a0e0','#223394','#46368f']},
    {year:1960, colors: ['#665d59','#969391','#6c7b65','#a1becf','#51689b','#2b2e38','#7084ce','#dadbe0','#dc1c49']},
    {year:1961, colors: ['#2b2820','#6b94a3','#8fc3dc','#c7d1d8','#4a5577','#768bd8','#5666b5','#2c1f75','#94929a']},
    {year:1962, colors: ['#282524','#b48474','#5e6b67','#cad9dd','#94c4de','#235aac','#98a5b9','#5e80cb','#1f297e']},
    {year:1963, colors: ['#ac6454','#857769','#5d796c','#95b4d4','#c6c9d2','#606b98','#6a7bc7','#40476e','#2b2a31']},
    {year:1964, colors: ['#604e3f','#b56210','#8f8173','#657268','#cdd0d1','#96bcd4','#4c6094','#5e67ce','#292930']},
    {year:1965, colors: ['#979292','#d05a05','#1d1a16','#cecdc5','#5c90a4','#80c1e1','#698ed7','#3d475f','#4760aa']},
    {year:1966, colors: ['#292220','#88c0dc','#6390b4','#cbd1db','#6684de','#4756b9','#424872','#94909d','#b75f71']},
    {year:1967, colors: ['#bc440c','#526562','#292a2a','#89cae0','#c9d6dc','#225fa8','#6882b0','#7090eb','#272680']},
    {year:1968, colors: ['#b05547','#807165','#517373','#8bb9d7','#c6ccd5','#586ca0','#384873','#5e7bce','#272733']},
    {year:1969, colors: ['#bc740c','#1f2425','#94cedd','#d4dfe6','#154982','#5f8ee3','#516692','#9da2b9','#181f86']},
    {year:1970, colors: ['#b45d51','#887a5b','#5b7e68','#94bfdc','#2d2e2f','#d1d3d6','#475370','#6a799f','#6c7fd2']},
    {year:1971, colors: ['#94938d','#d4dbd5','#202628','#7cc7e3','#6893a6','#445a7f','#566cdc','#191e58','#b437e3']},
    {year:1972, colors: ['#ac5e0f','#856c42','#d6d8d0','#576f69','#8db8d5','#202327','#35486a','#51699d','#5576d4']},
    {year:1973, colors: ['#af4b19','#7a5744','#6b8167','#cedddb','#83bbda','#4a6d9e','#364f76','#5f88c9','#282a30']},
    {year:1974, colors: ['#c7c3bd','#77c1fb','#5b9ff3','#2b4a81','#1841b1','#7c98ed','#4564d3','#101549','#16179c']},
    {year:1975, colors: ['#b5715f','#90d7e0','#e1eef0','#4b629b','#9098c7','#51535f','#5b6de8','#292985','#372728']},
    {year:1976, colors: ['#3a4e59','#b6d7ea','#566d7c','#111c29','#3260a2','#c9d9f0','#5484cb','#8ea6cb','#686dc2']},
    {year:1978, colors: ['#8abad6','#4e68a0','#3c4456','#c2c9de','#6674da','#8f8dbc','#1f14bc','#ac84e1','#2b282e']},
    {year:1979, colors: ['#8d716b','#ac5b43','#cac0bd','#627984','#8eb7e3','#6a81c8','#4c5788','#27272e','#5d5758']},
    {year:1980, colors: ['#b66036','#1f2112','#ced2cd','#82c1c6','#61929d','#4a5b6e','#678cc6','#18146a','#969293']},
    {year:1981, colors: ['#7e563d','#ac6c44','#547378','#63ccdd','#607ca2','#30476a','#7292c6','#cccbd3','#121117']},
    {year:1982, colors: ['#ac5a54','#806b5a','#578862','#8fbbd8','#c4cdda','#6e89c9','#5f6e99','#47506e','#2c2b35']},
    {year:1983, colors: ['#86cae2','#5f6b80','#7a92c0','#2d4a8f','#3d4157','#dbdce6','#1d1c21','#5d39a3','#bc749c']},
    {year:1984, colors: ['#816755','#a38f80','#32caf2','#6277a4','#252d46','#b3b7ca','#e8e7eb','#5e407f','#897195']},
    {year:1985, colors: ['#907b7b','#696f6a','#8fbce1','#495992','#6279ce','#2c2c38','#d5d5db','#bf5cab','#655358']},
    {year:1986, colors: ['#54705e','#8eb0cd','#455689','#687ec3','#3b425e','#1b1b22','#cbc8cf','#827a7f','#b15458']},
    {year:1987, colors: ['#5d735f','#87b1d2','#262930','#4c5a8c','#666fc1','#ccc5cc','#564e51','#877278','#ae595b']},
    {year:1988, colors: ['#866746','#4d763f','#80b5cf','#374162','#5d6bc5','#565d95','#25252b','#cac9d2','#ad58b1']},
    {year:1989, colors: ['#a46454','#48675f','#6eb1de','#547bc2','#56668e','#3d4865','#22242c','#cac9d3','#6e6467']},
    {year:1990, colors: ['#5a6568','#93afd3','#455789','#6276c5','#3f445e','#cecdd7','#222129','#827a87','#ad5991']},
    {year:1991, colors: ['#623d37','#b83c20','#498739','#86b6d8','#4c5690','#6c78ca','#cccad5','#28252c','#916469']},
    {year:1992, colors: ['#a95949','#5b6772','#89a6cd','#5f7abd','#374777','#cacbd3','#24242a','#535052','#7e7c7d']},
    {year:1993, colors: ['#594f3c','#d0ceb6','#2c2c2b','#1a9fc4','#5e4c9b','#493186','#9882c0','#71686f','#cdb4c4']},
    {year:1994, colors: ['#ad5a29','#4c744c','#92acc6','#3a415e','#6b7bbe','#414f8c','#23232f','#827787','#c6bdbe']},
    {year:1995, colors: ['#a4bed9','#687a91','#7b91c7','#22242a','#495788','#d1d2d9','#918e93','#5f5a5d','#be6c86']},
    {year:1996, colors: ['#505666','#697dc8','#b0b5cb','#8c8f9d','#2c335d','#44488d','#191726','#6e434e','#9d4251']},
    {year:1997, colors: ['#372421','#9c5c2e','#6b5a48','#bebeb4','#3f5366','#8798b7','#4556a5','#171f62','#09070c']},
    {year:1999, colors: ['#b0c4e3','#324884','#8091c7','#4e63ac','#1f223a','#4e5281','#382f96','#d9d3dc','#bc9ca0']},
    {year:2006, colors: ['#766060','#232526','#92c1f8','#c4d8f2','#6d91da','#5f729c','#444f6b','#1642c0','#7c7579']},
    {year:2007, colors: ['#161616','#bcaca9','#d4cfcc','#9a9693','#4c4a47','#b0afac','#7e807f','#6e737c','#9ea3ac']},
    {year:2009, colors: ['#b4580e','#928070','#64605c','#d6c5b3','#6e7570','#99aeb7','#33353b','#595d8d','#5852cd']},
    {year:2010, colors: ['#a48484','#476f76','#6daec9','#6485aa','#434d70','#19191e','#777781','#4a424a','#c0b9bc']},
    {year:2011, colors: ['#6e5f5c','#506e71','#444d51','#90a9bd','#5f768c','#405368','#728db3','#1d222a','#c2bfc6']},
    {year:2012, colors: ['#b04a3d','#5e665b','#90b0cd','#435886','#17191e','#7085bf','#343d59','#c1c3d1','#83828a']},
    {year:2013, colors: ['#bc6337','#675b55','#978f8a','#dbd0c8','#6d8684','#a0c2c8','#2d3037','#6f89cb','#515f89']},
    {year:2014, colors: ['#826f6e','#cdc8c4','#86b5be','#4f6d81','#6584b9','#36487a','#191924','#bb4f8a','#504142']},
    {year:2015, colors: ['#676564','#bd6c21','#988b79','#d4d2c3','#a0c6c2','#6c8e8d','#28353c','#8ea4c3','#53688f']},
    {year:2016, colors: ['#cdc7bc','#5c5739','#798176','#b1d9fb','#739ed3','#2e73d9','#adb0b8','#223398','#5f64ab']},
    {year:2017, colors: ['#3f3d3c','#4a5560','#8996b3','#b9bac6','#0d0d11','#7272a4','#3c3a64','#646368','#9474b4']},
    {year:2018, colors: ['#b1a197','#877766','#534736','#706657','#7b7c6a','#a2a49b','#566db5','#9fa5bd','#737586']},
    {year:2019, colors: ['#6b6958','#3a3a35','#788696','#b0bee2','#939ecb','#636b92','#c5c6db','#352ecb','#959094']}],
        yearsExpanded: 1
      }
    }

    toggleColorAgg = () => {
      this.setState(prevState => ({
        yearsExpanded: (prevState.yearsExpanded+1)%2
      }));
    }

    createAllSlides = () => {
        let allSlides = []
        let myColors = []
        let totHeight = 700
        let myStyle = {
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              display: 'inline-block',
              height: '100%',
              width: '100%',
              height: '700px',
              overflow: 'hidden',
              justifyContent: 'center',
              textAlign: 'center'};

        if (this.state.yearsExpanded == -1){ //never
          myColors = this.state.colors
          totHeight= myColors.length*70
        }else{
          myColors = this.state.yearly_colors
          totHeight= myColors.length*70
        }
        // Outer loop to create parent
        for (let i = 0; i < myColors.length; i+=1) {
          allSlides.push(
            <div style ={ myStyle }>
            <ColorSlide samples={myColors[i]["colors"]} />
            </div>)
        }
        return allSlides
      }

    render() {
      const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 30},
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 15},
        mobile: { breakpoint: { max: 464, min: 0 }, items: 7},
        };

      return (
        <div>
          <ButtonToolbar style = {{justifyContent: 'left'}}>
            <Button variant="outline-primary" onClick={this.toggleColorAgg}> {this.state.yearsExpanded == 1 ? "Show By Year" : "Show By Year "}</Button>
          </ButtonToolbar>
          <Carousel  responsive={responsive} >
            {this.createAllSlides()}
          </Carousel>
        </div>
      );

    }

    }

export default ColorsPage;
