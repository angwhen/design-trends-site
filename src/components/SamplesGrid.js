import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
//https://www.npmjs.com/package/react-multi-carousel


class SamplesGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      yearly_samples_data: [
['1803','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1803.png'],
['1804','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1804.png'],
['1805','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1805.png'],
['1806','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1806.png'],
['1807','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1807.png'],
['1808','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1808.png'],
['1809','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1809.png'],
['1810','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1810.png'],
['1811','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1811.png'],
['1812','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1812.png'],
['1813','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1813.png'],
['1814','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1814.png'],
['1815','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1815.png'],
['1816','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1816.png'],
['1817','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1817.png'],
['1818','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1818.png'],
['1819','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1819.png'],
['1820','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1820.png'],
['1821','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1821.png'],
['1822','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1822.png'],
['1823','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1823.png'],
['1824','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1824.png'],
['1825','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1825.png'],
['1826','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1826.png'],
['1827','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1827.png'],
['1828','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1828.png'],
['1829','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1829.png'],
['1830','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1830.png'],
['1831','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1831.png'],
['1832','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1832.png'],
['1833','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1833.png'],
['1834','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1834.png'],
['1835','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1835.png'],
['1836','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1836.png'],
['1837','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1837.png'],
['1838','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1838.png'],
['1839','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1839.png'],
['1840','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1840.png'],
['1841','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1841.png'],
['1842','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1842.png'],
['1843','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1843.png'],
['1844','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1844.png'],
['1845','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1845.png'],
['1846','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1846.png'],
['1847','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1847.png'],
['1848','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1848.png'],
['1849','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1849.png'],
['1850','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1850.png'],
['1851','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1851.png'],
['1852','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1852.png'],
['1853','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1853.png'],
['1854','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1854.png'],
['1855','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1855.png'],
['1856','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1856.png'],
['1857','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1857.png'],
['1858','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1858.png'],
['1859','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1859.png'],
['1860','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1860.png'],
['1861','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1861.png'],
['1862','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1862.png'],
['1863','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1863.png'],
['1864','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1864.png'],
['1865','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1865.png'],
['1866','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1866.png'],
['1867','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1867.png'],
['1868','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1868.png'],
['1869','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1869.png'],
['1870','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1870.png'],
['1871','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1871.png'],
['1872','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1872.png'],
['1873','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1873.png'],
['1874','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1874.png'],
['1875','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1875.png'],
['1876','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1876.png'],
['1877','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1877.png'],
['1878','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1878.png'],
['1879','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1879.png'],
['1880','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1880.png'],
['1881','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1881.png'],
['1882','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1882.png'],
['1883','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1883.png'],
['1884','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1884.png'],
['1885','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1885.png'],
['1886','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1886.png'],
['1887','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1887.png'],
['1888','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1888.png'],
['1889','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1889.png'],
['1890','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1890.png'],
['1891','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1891.png'],
['1892','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1892.png'],
['1893','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1893.png'],
['1894','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1894.png'],
['1895','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1895.png'],
['1896','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1896.png'],
['1897','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1897.png'],
['1898','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1898.png'],
['1899','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1899.png'],
['1900','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1900.png'],
['1901','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1901.png'],
['1902','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1902.png'],
['1903','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1903.png'],
['1904','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1904.png'],
['1905','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1905.png'],
['1906','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1906.png'],
['1907','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1907.png'],
['1908','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1908.png'],
['1909','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1909.png'],
['1910','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1910.png'],
['1911','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1911.png'],
['1912','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1912.png'],
['1913','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1913.png'],
['1914','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1914.png'],
['1915','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1915.png'],
['1916','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1916.png'],
['1917','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1917.png'],
['1918','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1918.png'],
['1919','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1919.png'],
['1920','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1920.png'],
['1921','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1921.png'],
['1922','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1922.png'],
['1923','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1923.png'],
['1924','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1924.png'],
['1925','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1925.png'],
['1926','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1926.png'],
['1927','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1927.png'],
['1928','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1928.png'],
['1929','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1929.png'],
['1930','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1930.png'],
['1931','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1931.png'],
['1932','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1932.png'],
['1933','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1933.png'],
['1934','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1934.png'],
['1935','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1935.png'],
['1936','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1936.png'],
['1937','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1937.png'],
['1938','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1938.png'],
['1939','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1939.png'],
['1940','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1940.png'],
['1941','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1941.png'],
['1942','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1942.png'],
['1943','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1943.png'],
['1944','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1944.png'],
['1945','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1945.png'],
['1946','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1946.png'],
['1947','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1947.png'],
['1948','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1948.png'],
['1949','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1949.png'],
['1950','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1950.png'],
['1951','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1951.png'],
['1952','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1952.png'],
['1953','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1953.png'],
['1954','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1954.png'],
['1955','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1955.png'],
['1956','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1956.png'],
['1957','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1957.png'],
['1958','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1958.png'],
['1959','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1959.png'],
['1960','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1960.png'],
['1961','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1961.png'],
['1962','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1962.png'],
['1963','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1963.png'],
['1964','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1964.png'],
['1965','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1965.png'],
['1966','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1966.png'],
['1967','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1967.png'],
['1968','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1968.png'],
['1969','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1969.png'],
['1970','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1970.png'],
['1971','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1971.png'],
['1972','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1972.png'],
['1973','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1973.png'],
['1974','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1974.png'],
['1975','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1975.png'],
['1976','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1976.png'],
['1977','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1977.png'],
['1978','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1978.png'],
['1979','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1979.png'],
['1980','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1980.png'],
['1981','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1981.png'],
['1982','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1982.png'],
['1983','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1983.png'],
['1984','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1984.png'],
['1985','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1985.png'],
['1986','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1986.png'],
['1987','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1987.png'],
['1988','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1988.png'],
['1989','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1989.png'],
['1990','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1990.png'],
['1991','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1991.png'],
['1992','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1992.png'],
['1993','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1993.png'],
['1994','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1994.png'],
['1995','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1995.png'],
['1996','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1996.png'],
['1997','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1997.png'],
['1998','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1998.png'],
['1999','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_1999.png'],
['2000','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2000.png'],
['2001','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2001.png'],
['2002','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2002.png'],
['2003','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2003.png'],
['2004','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2004.png'],
['2005','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2005.png'],
['2006','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2006.png'],
['2007','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2007.png'],
['2008','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2008.png'],
['2009','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2009.png'],
['2010','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2010.png'],
['2011','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2011.png'],
['2012','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2012.png'],
['2013','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2013.png'],
['2014','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2014.png'],
['2015','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2015.png'],
['2016','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2016.png'],
['2017','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2017.png'],
['2018','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2018.png'],
['2019','https://design-trends-bucket.s3.us-east-2.amazonaws.com/samples_from_year_2019.png']
],
    }
  }


  createAllSlides = () => {
      let allSlides = []
      let myStyle = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
            width: '70px',
            height: '770px',
            overflow: 'hidden',
            justifyContent: 'center',
            textAlign: 'center'};

      // Outer loop to create parent
      for (let i = 0; i <   this.state.yearly_samples_data.length; i+=1) {
        if (this.state.yearly_samples_data[i][0] < 1900){
          continue;
        }
        allSlides.push(
          <div style ={ myStyle }>
            <div>   {this.state.yearly_samples_data[i][0]} </div>
              <div style ={{
                    backgroundImage: `url(${this.state.yearly_samples_data[i][1]})`,
                    backgroundRepeat: 'no-repeat',
                    width: '70px',
                    height: '700px',
                    overflow: 'hidden',
                    justifyContent: 'center',
                    textAlign: 'center'}}>
              </div>
          </div>)
      }
      return allSlides
    }

    createDescription = () => {
      let description = []
      description.push(<center ><div style = {{width:'60%'}}><p>
          After segmenting out the people from my image data, I took a small box in the center of a person in each
          image to show as something representative of the clothing in that image. I organized it by date and made the
          mosaic below. Hopefully this can help us see a quick overview of how clothing designs have been changing.
      </p></div></center>);

      return description;
    }

    render() {
      const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 30},
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 15},
        mobile: { breakpoint: { max: 464, min: 0 }, items: 7},
      };

      return (
        <div>
          {this.createDescription()}
          <Carousel  responsive={responsive} >
            {this.createAllSlides()}
          </Carousel>
        </div>
      );

    }

    }

export default SamplesGrid;
