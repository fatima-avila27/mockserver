const express = require('express');
const app = express();
const port = 3009;

app.get('/data', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soap:Body>
        <RequestTransactionResponse
            xmlns="https://corec.digifact.com/schema/ws">
            <RequestTransactionResult>
                <Request>
                    <Requestor>d06a8f37-2d87-43d2-b977-04d503532786</Requestor>
                    <RequestorName>DIGIFACT SERVICIOS SAS</RequestorName>
                    <RequestorActive>true</RequestorActive>
                    <Transaction>DASHBOARD_DATA</Transaction>
                    <Country>GT</Country>
                    <Entity>123456789</Entity>
                    <User>d06a8f37-2d87-43d2-b977-04d503532786</User>
                    <UserName>GT.123456789.user1</UserName>
                    <Id>6a4f065c-9cf8-4863-80fe-adb40cc491c4</Id>
                    <TimeStamp>2024-12-11T11:07:23.9420078-06:00</TimeStamp>
                </Request>
                <Response>
                    <Result>true</Result>
                    <TimeStamp>2024-12-11T11:07:23.9576501-06:00</TimeStamp>
                    <LastResult />
                    <Code>1</Code>
                    <Description />
                    <Hint />
                    <Processor>TEST_GT</Processor>
                </Response>
                <ResponseData>
                    <ResponseData1>26</ResponseData1>
                    <ResponseData2 />
                    <ResponseData3 />
                    <ResponseData4 />
                    <ResponseDataSet>
                        <xs:schema id="NewDataSet"
                            xmlns=""
                            xmlns:xs="http://www.w3.org/2001/XMLSchema"
                            xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
                            <xs:element name="NewDataSet" msdata:IsDataSet="true" msdata:UseCurrentLocale="true">
                                <xs:complexType>
                                    <xs:choice minOccurs="0" maxOccurs="unbounded">
                                        <xs:element name="T">
                                            <xs:complexType>
                                                <xs:sequence>
                                                    <xs:element name="CountryCode" type="xs:string" minOccurs="0" />
                                                    <xs:element name="TaxID" type="xs:string" minOccurs="0" />
                                                    <xs:element name="AnnualIncome" type="xs:decimal" minOccurs="0" />
                                                    <xs:element name="MonthlyIncome" type="xs:decimal" minOccurs="0" />
                                                    <xs:element name="AverageAnnualTicket" type="xs:decimal" minOccurs="0" />
                                                    <xs:element name="AverageMonthlyTicket" type="xs:decimal" minOccurs="0" />
                                                    <xs:element name="AnnualCancellations" type="xs:int" minOccurs="0" />
                                                    <xs:element name="MonthlyCancellations" type="xs:int" minOccurs="0" />
                                                    <xs:element name="DocumentsUsed" type="xs:string" minOccurs="0" />
                                                </xs:sequence>
                                            </xs:complexType>
                                        </xs:element>
                                    </xs:choice>
                                </xs:complexType>
                            </xs:element>
                        </xs:schema>
                        <diffgr:diffgram
                            xmlns:msdata="urn:schemas-microsoft-com:xml-msdata"
                            xmlns:diffgr="urn:schemas-microsoft-com:xml-diffgram-v1">
                            <NewDataSet
                                xmlns="">
                                <T diffgr:id="T1" msdata:rowOrder="0">
                                    <CountryCode>GT</CountryCode>
                                    <TaxID>123456789</TaxID>
                                    <AnnualIncome>100000.00</AnnualIncome>
                                    <MonthlyIncome>5000.00</MonthlyIncome>
                                    <AverageAnnualTicket>221.00</AverageAnnualTicket>
                                    <AverageMonthlyTicket>150.00</AverageMonthlyTicket>
                                    <AnnualCancellations>60</AnnualCancellations>
                                    <MonthlyCancellations>5</MonthlyCancellations>
                                    <DocumentsUsed>1000/1500</DocumentsUsed>
                                </T>
                            </NewDataSet>
                        </diffgr:diffgram>
                    </ResponseDataSet>
                </ResponseData>
            </RequestTransactionResult>
        </RequestTransactionResponse>
    </soap:Body>
</soap:Envelope>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});