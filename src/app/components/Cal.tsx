import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="noishey/30min"
    style={{width:"70%",height:"70%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"auto"}}
  />;
};
  