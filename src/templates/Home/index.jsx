import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import mockBase from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      console.log('fetching');
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=landing-page&populate[menu][populate]=*&populate[sections][populate]=*',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (error) {
        setData([]);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, link, text, srcImg } = menu;

  console.log(menu);

  return (
    <Base
      footerHtml={footerHtml}
      links={links}
      logoData={{ text, link, srcImg }}
    >
      <h1>Ola mundo</h1>
      <h1>Ola mundo</h1>
      <h1>Ola mundo</h1>
      <h1>Ola mundo</h1>
    </Base>
  );
}

export default Home;
