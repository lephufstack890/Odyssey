import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { Button } from '@react-pdf-viewer/core'; // Import button component for downloading
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useTranslation } from 'react-i18next';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
// import { MoreIcon } from '@react-pdf-viewer/toolbar';
// import styles from './OdysseyProfile.module.scss';

function OdysseyProfile() {
    const { i18n, t } = useTranslation();

    const toolbarPluginInstance = toolbarPlugin({
        fullScreenPlugin: true,
        zoomPlugin: {
            zoomInProps: { /* Custom zoom in button properties */ },
            zoomOutProps: { /* Custom zoom out button properties */ },
        },
        downloadPlugin: {
            fileNameGenerator: () => 'Odysseyprofile.pdf', // Customize the downloaded file name
        },
    });
    const { Toolbar } = toolbarPluginInstance;
    var filepath = "./Odysseyprofile_en.pdf"
    if (i18n.language == "vn") {
        filepath = "./Odysseyprofile_vi.pdf"
    }
    
    return (
        <div className="odyssey-profile">
            <div className="pdf-view" style={{ height: '700px', padding: '100px 0px 40px' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="rpv-core__viewer" style={{ height: '100%' }}>
                        <div style={{ width: '100%', alignItems: 'center', backgroundColor: '#eeeeee', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', display: 'flex', padding: '4px' }}>
                            <Toolbar />
                        </div>
                        <div style={{ height: 'calc(100% - 40px)', overflow: 'auto' }}>
                            <Viewer plugins={[toolbarPluginInstance]} fileUrl={filepath} />
                        </div>
                    </div>
                </Worker>
            </div>
        </div>
    );
}

export default OdysseyProfile;
