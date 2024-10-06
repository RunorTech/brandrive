import { AiOutlineSolution, AiOutlineTransaction } from "react-icons/ai";
import { GiChart, GiExpense, GiMoneyStack } from "react-icons/gi";
import { IoIosLink } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiAwssecretsmanager } from "react-icons/si";

const sideBarData = [
    {
        $id: 1,
        link: "/dashboard",
        text: "Dasboard",
        svg: <MdDashboard />
    },
    {
        $id: 2,
        link: "/wallet",
        text: "WAllet & Cards",
        svg: <IoWalletOutline />
    },
    {
        $id: 3,
        link: "/transaction",
        text: "Transactions",
        svg: <AiOutlineTransaction />
    },
    {
        $id: 4,
        link: "/income",
        text: "Income",
        svg: <GiMoneyStack />
    },
    {
        $id: 5,
        link: "/expenses",
        text: "Expenses",
        svg: <GiExpense />
    },
    {
        $id: 6,
        link: "/manage-budget",
        text: "Manage Budget",
        svg: <SiAwssecretsmanager />
    },
    {
        $id: 7,
        link: "/payment",
        text: "Payment Pages",
        svg: <IoIosLink />
    },
    {
        $id: 8,
        link: "/bills-utilities",
        text: "Bills & Utilities",
        svg: <AiOutlineSolution />
    },
    {
        $id: 9,
        link: "/insight",
        text: "Insight",
        svg: <GiChart />
    },
]

export default sideBarData;