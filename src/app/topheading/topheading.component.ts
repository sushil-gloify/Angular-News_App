import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
  img:any = 'https://carterporter-akasa-qa-fe.s3.ap-south-1.amazonaws.com/assets/images/screen_images/arrow-left.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiSDBGAiEAs8CLqpsVTpwOhyW3NPZjZGv8DVuURdIYUslMuQiSIc8CIQDqUjVB958kYEGGLFJ7SulqaFCMuonRHzdz%2Bi3dpJE9OyqEAwi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAMaDDAxMjI5NDg4MDgxMCIMoY2nReFBIIRD2GcEKtgC2mFgU2WBQ%2BzeJ52qciE0%2BjzpgoKLDpF8WxnVwQW8rE4chaqTgaYYuE2HMAvW%2FMwdZxGB16lyfANTBQ8oAwKGijR3%2F4ftjPULHED905xXICj4QjNF%2BAMU%2FGSbsskDZWl9f5YV2V3%2FQ7qFePDMvlEzedUaAWQdNdZhudPlKbquGO%2FZLaNdmyWeS8tZJO8UYLC1CiID%2Fp%2B3ORRSWvdz4Dxk3aURCFBagZKaWHY0NFQnNZkOyRv0gv2SezPDugUYUZ312mHCKoTw9dUkWxFL4ihdrDQ5zejozfs5W4CSfyGEGhWzCdZUoB5bXZgRi2ZGc5K0Jkqra2O3AYb%2Fh%2Br4y0Mf3UjlL9tAL9WHyu%2BAa4wOxjQo9KPYRxKBUWGDAo86g6%2BVq0AW7nitl9CmRPjf1gqtpjTD2IomRR0rfrlnnJUPtXotahpjIxof5auGE3l%2B3%2FFW5kdHLSkiS8gwhamUlgY6sgI521CYL%2BaxVc2ReIBctLlhcQSfj227WG%2Fe4AJF4HKn5GRA7xrDuVIOlItZfu26sgNkSdXuKiC%2BxwdrNOI4jW5BKCSle2gwwJTeQ88Qj2PxnlNINm5IpfPPQyY7PaaPO0WUFAesexzeqAvgg5vCJnQc1UGeLrOosHXX9Y9ip82vtZF9%2BjAlE3esxsOTdvLuefcxx%2FmFKU53GF6%2FNOBH3iMBbjXRmrVPWrL06Vaq1T%2F12gquaZIn6KJG0OE0YlfPwC%2FLM5mB6FhWQk8tXWMDLYo3fvIPaLIjJI2iB7MgVs%2B9SyNR7%2BJcmDP8aCK3RjH1C7qfdS0UOC5YGQBvE0BU%2BRyMv%2BPgUTsXgGSq8SKpSyVIQqd%2B7JkCJrNHTueO5t2kLUnipLjJTSMbCn6Vq00HhOgf9Ug%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220706T122613Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQFXGU7YVHX73E3NW%2F20220706%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=804e867d69a5566c56e25f132d14892f58cd4b3de16538330127a923915df9a3'
  topheadingDisplay:any = [];

  ngOnInit(): void {
    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result

  })
  }

}
