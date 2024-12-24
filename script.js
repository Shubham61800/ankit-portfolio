const overlay = document.getElementById("overlay-container");
const openOverlay = document.getElementById("open");
const closeOverlay = document.getElementById("close");

openOverlay.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

const certificates = [
  {
    title: "AWS Certified Security - Spaciality",
    company: "Amazon Web Services - AWS",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C560BAQER_QnUTXrPJw/company-logo_100_100/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1743033600&v=beta&t=2Ytz71pq6beYxJ49pHTzqLbXGzt5JhNQNEbyyACxWAQ",
    credientialUrl:
      "https://www.credly.com/badges/226f23b0-64da-46e4-92c6-007dfec7c3fb/public_url",
  },
  {
    title: "Certified Red Team Professional",
    company: "Altered Security",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQEYCd7CAPbWUg/company-logo_100_100/company-logo_100_100/0/1710419563724/alteredsecurity_logo?e=1743033600&v=beta&t=szxZ-707R8s6SlwbOynTR_bmDSbghrDcN5V1L7GoZkY",
    credientialUrl:
      "https://www.credential.net/3335e123-d456-4224-9884-dd549f25bbc0#acc.LwFxd4rz",
  },
  {
    title: "CREST CPSA",
    compnay: "CREST",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQH1moXLdCVHRQ/company-logo_100_100/company-logo_100_100/0/1651140771071/crest_approved_logo?e=1743033600&v=beta&t=s5pwtToFseelM3olm34tZR0dW24Idqi9ohA1yPH-hsk",
  },
  {
    title: "Certified Red Team Operator",
    company: "Zero-Point Security LTD",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQHAWVIxesEjfg/company-logo_100_100/company-logo_100_100/0/1648207041316/zero_point_security_ltd_logo?e=1743033600&v=beta&t=kwPJHp64ANGzYtDCyKLFQoDRj8laovN--iGfgGze3BY",
    credientialUrl:
      "https://api.eu.badgr.io/public/assertions/3sflStvnTbet8XtGeX7vdw?identity__email=ankitrakeshjoshi%40gmail.com",
  },
  {
    title: "Certified AppSec Pentester (CAPen)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified Network Pentester",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified Network Security Practitioner(CNSP)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified AppSec Practitioner (CAP)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "ISO 27001 Foundation - Information Security Certification",
    company: "TUV SUD",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGFhpduw_DyfQ/img-crop_100/img-crop_100/0/1721631581233?e=1743033600&v=beta&t=uSNA4A53IJB8fNc1Y4rb8xE-aTHqQ7p3UvZlKRCQRE0",
  },
  {
    title: "Certified Network Security Specialist",
    company: "ICSI(International CyberSecurity Institute) UK",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGkR1L0YT4_uw/company-logo_100_100/company-logo_100_100/0/1683642868414/icsi_international_cybersecurity_institute__logo?e=1743033600&v=beta&t=n6jysfjO8mnOXd1_ByKDz1Rr94X9sJXNr89k5KSH8Pg",
    credientialUrl: "https://www.icsi.co.uk/certificates/rxoqbzbksm",
  },
  {
    title: "Certified Penetration Testing Expert",
    company: "Pristine InfoSolutions Pvt. Ltd.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C510BAQEVIg0H61imqg/company-logo_100_100/company-logo_100_100/0/1631391176259?e=1743033600&v=beta&t=EL2g1Z1R4tt72Sban5VnckWLxZsn67wdoNAUN-ZBCUA",
  },
  {
    title: "Certified Information Security Analyst and Ethical Hacker",
    company: "Pristine InfoSolutions Pvt. Ltd.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C510BAQEVIg0H61imqg/company-logo_100_100/company-logo_100_100/0/1631391176259?e=1743033600&v=beta&t=EL2g1Z1R4tt72Sban5VnckWLxZsn67wdoNAUN-ZBCUA",
  },
];

certificates.forEach((item) => {
  const certificateContainer = document.getElementById("certificate-container");
  const certificate = document.createElement("div");
  certificate.className = "certificate";

  const img = document.createElement("img");
  img.src = item.imageUrl;

  const certificateContent = document.createElement("div");
  certificateContent.className = "certificates-detials";

  const titleElement = document.createElement("h5");
  titleElement.className = "title";
  titleElement.textContent = item.title;

  const companyElement = document.createElement("p");
  companyElement.className = "company";
  companyElement.textContent = item.company;

  certificateContent.appendChild(titleElement);
  certificateContent.appendChild(companyElement);

  certificate.appendChild(img);
  certificate.appendChild(certificateContent);
  certificateContainer.appendChild(certificate);
});
