/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental:{
    serverComponentsHmrCache: false, //default to true
   },

   images:{
    remotePatterns: [
        {
            protocol: "https",
            hostname:"gnotdrbllhkcrchwtudd.supabase.co"
        }
    ]
   },async headers(){
        return[
            {
            source:"/embed",
                headers:[
                {key:"Content-Security-Policy",
                value: "frame src 'self' https://vehiqle-waitlist.created.app/"}
                ]
    }]
    }
};

export default nextConfig;
